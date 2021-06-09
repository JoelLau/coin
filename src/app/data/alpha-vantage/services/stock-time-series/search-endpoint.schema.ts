import { AlphaVantageApiParameters } from '../alpha-vantage-api/alpha-vantage-api-parameters.schema';

export const SearchEndPointDemos: string[] = ['tesco', 'tencent', 'BA', 'SAIC'];
export interface SearchEndPointParameters extends AlphaVantageApiParameters {
  function: 'SYMBOL_SEARCH';
  keywords: string;
  datatype?: 'json' | 'csv';
  apikey?: string;
}

export interface SearchEndPointRawResponse {
  bestMatches: SearchEndpointRawResponseBestMatchItem[];
}

export interface SearchEndpointRawResponseBestMatchItem {
  '1. symbol': string;
  '2. name': string;
  '3. type': 'Equity' | string;
  '4. region': 'United States' | string;

  /**
   * e.g. "09:30"
   */
  '5. marketOpen': string;

  /**
   * e.g. "16:00"
   */
  '6. marketClose': string;

  /**
   * e.g. UTC-04
   */
  '7. timezone': string;
  '8. currency': 'USD' | string;

  /**
   * e.g. '0.8889'
   */
  '9. matchScore': string;
}

export type SearchEndPointResponse = SearchEndpointResponseBestMatchItem[];

export class SearchEndpointResponseBestMatchItem {
  symbol: string = '';
  name: string = '';
  type: 'Equity' | string = '';
  region: 'United States' | string = '';
  marketOpen: string = '';
  marketClose: string = '';
  timezone: string = '';
  currency: 'USD' | string = '';
  matchScore: number = 0;

  static fromSearchEndpointResponseBestMatchItem(
    rawItem: SearchEndpointRawResponseBestMatchItem
  ): SearchEndpointResponseBestMatchItem {
    return {
      symbol: rawItem['1. symbol'],
      name: rawItem['2. name'],
      type: rawItem['3. type'],
      region: rawItem['4. region'],
      marketOpen: rawItem['5. marketOpen'],
      marketClose: rawItem['6. marketClose'],
      timezone: rawItem['7. timezone'],
      currency: rawItem['8. currency'],
      matchScore: parseFloat(rawItem['9. matchScore']),
    } as SearchEndpointResponseBestMatchItem;
  }
}
