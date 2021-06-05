import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlphaVantageApiParameters } from './alpha-vantage-api-parameters';

@Injectable({
  providedIn: 'root',
})
export class AlphaVantageApiService {
  constructor(private httpClient: HttpClient) {}

  query(params: AlphaVantageApiParameters): Observable<any> {
    const url = this.getUrl();
    const queryParameters = this.getQueryParameters(params);

    return this.httpClient.get(url, { params: queryParameters });
  }

  getUrl(): string {
    return 'https://www.alphavantage.co/query';
  }

  getQueryParameters(
    params: AlphaVantageApiParameters
  ): AlphaVantageApiParameters {
    if (!params.apikey) {
      params.apikey = 'demo';
    }

    return params;
  }
}
