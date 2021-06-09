import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlphaVantageApiService } from '../alpha-vantage-api/alpha-vantage-api.service';
import {
  SearchEndPointDemos,
  SearchEndPointParameters,
  SearchEndPointRawResponse,
  SearchEndpointRawResponseBestMatchItem,
  SearchEndPointResponse,
  SearchEndpointResponseBestMatchItem,
} from './search-endpoint.schema';

@Injectable({
  providedIn: 'root',
})
export class StockTimeSeriesService {
  constructor(private alphaVantageApiService: AlphaVantageApiService) {}

  searchEndPoint(
    args: SearchEndPointParameters | string
  ): Observable<SearchEndPointResponse> {
    const param = this.getSearchEndPointParameters(args);
    return this.alphaVantageApiService.query(param).pipe(
      map((rawResponse: SearchEndPointRawResponse) => {
        return rawResponse.bestMatches.map(
          (rawItem: SearchEndpointRawResponseBestMatchItem) =>
            SearchEndpointResponseBestMatchItem.fromSearchEndpointResponseBestMatchItem(
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
      returnable.apikey = 'demo';
    }

    return returnable;
  }
}
