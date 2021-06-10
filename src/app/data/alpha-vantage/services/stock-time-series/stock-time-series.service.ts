import { Injectable } from '@angular/core';
import {
  IntradayDemos,
  IntradayParameters,
  IntradayRawResponse,
  IntradayResponse,
} from '@data/alpha-vantage/schemas/search-endpoint-intraday.schema';
import {
  QuoteEndpointDemos,
  QuoteEndpointParameters,
  QuoteEndpointRawResponse,
  QuoteEndpointResponse,
  QuoteEndpointResponseGlobalQuote,
} from '@data/alpha-vantage/schemas/search-endpoint-quote-endpoint.schema';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SearchEndpointDemos,
  SearchEndpointParameters,
  SearchEndpointRawResponse,
  SearchEndpointRawResponseBestMatchItem,
  SearchEndpointResponse,
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

  intraday(args: IntradayParameters): Observable<IntradayResponse> {
    const param = this.getIntradayParameters(args);
    return this.alphaVantageApiService.query(param).pipe(
      map((rawResponse: IntradayRawResponse): IntradayResponse => {
        return IntradayResponse.fromIntradayRawResponse(rawResponse);
      })
    );
  }

  private getIntradayParameters(args: IntradayParameters): IntradayParameters {
    const returnable = args;
    if (isIntraDayDemo(args)) {
      returnable.apikey = ALPHA_VANTAGE_DEMO_KEY;
    }
    return returnable;

    function isIntraDayDemo(args: IntradayParameters): boolean {
      return IntradayDemos.some((demo) => {
        return (
          Object.keys(demo).length === Object.keys(args).length &&
          Object.keys(demo).some((key) => {
            return demo[key] === args[key];
          })
        );
      });
    }
  }

  quoteEndpoint(
    args: QuoteEndpointParameters | string
  ): Observable<QuoteEndpointResponse> {
    const param = this.getQuoteEndpointParameters(args);
    return this.alphaVantageApiService.query(param).pipe(
      map((rawResponse: QuoteEndpointRawResponse) => {
        return QuoteEndpointResponseGlobalQuote.fromRawResponse(
          rawResponse['Global Quote']
        );
      })
    );
  }

  private getQuoteEndpointParameters(
    args: QuoteEndpointParameters | string
  ): QuoteEndpointParameters {
    const returnable =
      typeof args === 'string'
        ? ({
            function: 'GLOBAL_QUOTE',
            symbol: args,
          } as QuoteEndpointParameters)
        : args;

    if (QuoteEndpointDemos.includes(returnable.apikey || '')) {
      returnable.apikey = ALPHA_VANTAGE_DEMO_KEY;
    }

    return returnable;
  }

  searchEndpoint(
    args: SearchEndpointParameters | string
  ): Observable<SearchEndpointResponse> {
    const param = this.getSearchEndpointParameters(args);
    return this.alphaVantageApiService.query(param).pipe(
      map((rawResponse: SearchEndpointRawResponse) => {
        return rawResponse.bestMatches.map(
          (rawItem: SearchEndpointRawResponseBestMatchItem) =>
            SearchEndpointResponseBestMatchItem.fromSearchEndpointRawResponseBestMatchItem(
              rawItem
            )
        );
      })
    );
  }

  private getSearchEndpointParameters(
    args: SearchEndpointParameters | string
  ): SearchEndpointParameters {
    const returnable =
      typeof args === 'string'
        ? ({
            function: 'SYMBOL_SEARCH',
            keywords: args,
          } as SearchEndpointParameters)
        : args;

    if (SearchEndpointDemos.includes(returnable.apikey || '')) {
      returnable.apikey = ALPHA_VANTAGE_DEMO_KEY;
    }

    return returnable;
  }
}
