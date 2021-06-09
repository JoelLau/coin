import { AlphaVantageApiParameters } from './alpha-vantage-api-parameters.schema';

export const QuoteEndPointDemos: string[] = ['IBM', '300135.SHZ'];
export interface QuoteEndPointParameters extends AlphaVantageApiParameters {
  function: 'GLOBAL_QUOTE';
  symbol: string;
  datatype?: 'json' | 'csv';
  apikey?: string;
}

export interface QuoteEndPointRawResponse {
  'Global Quote': QuoteEndpointRawResponseGlobalQuote;
}

export interface QuoteEndpointRawResponseGlobalQuote {
  '01. symbol': string;
  '02. open': string;
  '03. high': string;
  '04. low': string;
  '05. price': string;
  '06. volume': string;
  '07. latest trading day': string;
  '08. previous close': string;
  '09. change': string;
  '10. change percent': string;
}

export type QuoteEndpointResponse = QuoteEndpointResponseGlobalQuote;
export class QuoteEndpointResponseGlobalQuote {
  symbol: string = '';
  open: number = 0;
  high: number = 0;
  low: number = 0;
  price: number = 0;
  volume: number = 0;
  latestTradingDay: Date = new Date();
  previousClose: number = 0;
  change: number = 0;
  changePercent: number = 0;

  static fromRawResponse(
    rawItem: QuoteEndpointRawResponseGlobalQuote
  ): QuoteEndpointResponseGlobalQuote {
    const [year, month, day]: number[] = rawItem['07. latest trading day']
      .split('-')
      .map((str, idx) => {
        // offset assumes month is the middle token and month is 0 based
        return parseInt(str) + (idx === 1 ? -1 : 0);
      });

    return {
      symbol: rawItem['01. symbol'],
      open: parseFloat(rawItem['02. open']),
      high: parseFloat(rawItem['03. high']),
      low: parseFloat(rawItem['04. low']),
      price: parseFloat(rawItem['05. price']),
      volume: parseFloat(rawItem['06. volume']),
      latestTradingDay: new Date(year, month, day),
      previousClose: parseFloat(rawItem['08. previous close']),
      change: parseFloat(rawItem['09. change']),

      // convert % string to float
      changePercent: parseFloat(rawItem['10. change percent']),
    };
  }
}
