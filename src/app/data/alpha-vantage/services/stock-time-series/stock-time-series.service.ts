import { Injectable } from '@angular/core';
import {
  QuoteEndPointDemos,
  QuoteEndPointParameters,
  QuoteEndPointRawResponse,
  QuoteEndpointResponse,
  QuoteEndpointResponseGlobalQuote,
} from '@data/alpha-vantage/schemas/search-endpoint-quote-endpoint.schema';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SearchEndPointDemos,
  SearchEndPointParameters,
  SearchEndPointRawResponse,
  SearchEndpointRawResponseBestMatchItem,
  SearchEndPointResponse,
  SearchEndpointResponseBestMatchItem,
} from '../../schemas/search-endpoint-search-endpoint.schema';
import {
  AlphaVantageApiService,
  ALPHA_VANTAGE_DEMO_KEY,
} from '../alpha-vantage-api/alpha-vantage-api.service';

@Injectable({
  providedIn: 'root',
})
export class StockTimeSeriesService {
  constructor(private alphaVantageApiService: AlphaVantageApiService) {}

  quoteEndPoint(
    args: QuoteEndPointParameters | string
  ): Observable<QuoteEndpointResponse> {
    const param = this.getQuoteEndPointParameters(args);
    return this.alphaVantageApiService.query(param).pipe(
      map((rawResponse: QuoteEndPointRawResponse) => {
        return QuoteEndpointResponseGlobalQuote.fromRawResponse(
          rawResponse['Global Quote']
        );
      })
    );
  }

  private getQuoteEndPointParameters(
    args: QuoteEndPointParameters | string
  ): QuoteEndPointParameters {
    const returnable =
      typeof args === 'string'
        ? ({
            function: 'GLOBAL_QUOTE',
            symbol: args,
          } as QuoteEndPointParameters)
        : args;

    if (QuoteEndPointDemos.includes(returnable.apikey || '')) {
      returnable.apikey = ALPHA_VANTAGE_DEMO_KEY;
    }

    return returnable;
  }

  searchEndPoint(
    args: SearchEndPointParameters | string
  ): Observable<SearchEndPointResponse> {
    const param = this.getSearchEndPointParameters(args);
    return this.alphaVantageApiService.query(param).pipe(
      map((rawResponse: SearchEndPointRawResponse) => {
        return rawResponse.bestMatches.map(
          (rawItem: SearchEndpointRawResponseBestMatchItem) =>
            SearchEndpointResponseBestMatchItem.fromSearchEndpointRawResponseBestMatchItem(
              rawItem
            )
        );
      })
    );
  }

  private getSearchEndPointParameters(
    args: SearchEndPointParameters | string
  ): SearchEndPointParameters {
    const returnable =
      typeof args === 'string'
        ? ({
            function: 'SYMBOL_SEARCH',
            keywords: args,
          } as SearchEndPointParameters)
        : args;

    if (SearchEndPointDemos.includes(returnable.apikey || '')) {
      returnable.apikey = ALPHA_VANTAGE_DEMO_KEY;
    }

    return returnable;
  }
}
