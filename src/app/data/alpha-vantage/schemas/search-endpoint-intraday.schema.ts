import { AlphaVantageApiParameters } from './alpha-vantage-api-parameters.schema';

export const IntradayDemos: IntradayParameters[] = [
  {
    function: 'TIME_SERIES_INTRADAY',
    symbol: 'IBM',
    interval: '5min',
    outputsize: 'compact',
  },
  {
    function: 'TIME_SERIES_INTRADAY',
    symbol: 'IBM',
    interval: '5min',
    outputsize: 'full',
  },
];

export interface IntradayParameters extends AlphaVantageApiParameters {
  function: 'TIME_SERIES_INTRADAY';
  symbol: string;
  interval: IntradayParametersInterval;
  adjusted?: boolean;
  outputsize?: 'compact' | 'full';
  datatype?: 'json' | 'csv';
  apikey?: string;
}

export type IntradayParametersInterval =
  | '1min'
  | '5min'
  | '15min'
  | '30min'
  | '60min';

export type IntradayRawResponse =
  | IntradayRawResponse1min
  | IntradayRawResponse5min
  | IntradayRawResponse15min
  | IntradayRawResponse30min
  | IntradayRawResponse60min;

export interface IntradayRawResponseGeneric {
  'Meta Data': IntradayRawResponseMetaData;
  'Time Series (1min)'?: IntradayRawResponseTimeSeries;
  'Time Series (5min)'?: IntradayRawResponseTimeSeries;
  'Time Series (15min)'?: IntradayRawResponseTimeSeries;
  'Time Series (30min)'?: IntradayRawResponseTimeSeries;
  'Time Series (60min)'?: IntradayRawResponseTimeSeries;
}

export interface IntradayRawResponse1min extends IntradayRawResponseGeneric {
  'Meta Data': IntradayRawResponseMetaData;
  'Time Series (1min)': IntradayRawResponseTimeSeries;
}

export interface IntradayRawResponse5min extends IntradayRawResponseGeneric {
  'Meta Data': IntradayRawResponseMetaData;
  'Time Series (5min)': IntradayRawResponseTimeSeries;
}

export interface IntradayRawResponse15min extends IntradayRawResponseGeneric {
  'Meta Data': IntradayRawResponseMetaData;
  'Time Series (15min)': IntradayRawResponseTimeSeries;
}

export interface IntradayRawResponse30min extends IntradayRawResponseGeneric {
  'Meta Data': IntradayRawResponseMetaData;
  'Time Series (30min)': IntradayRawResponseTimeSeries;
}

export interface IntradayRawResponse60min extends IntradayRawResponseGeneric {
  'Meta Data': IntradayRawResponseMetaData;
  'Time Series (60min)': IntradayRawResponseTimeSeries;
}

export class IntradayResponse {
  metaData: IntradayResponseMetadata = new IntradayResponseMetadata();
  timeSeries: IntradayResponseTimeSeries = new IntradayResponseTimeSeries();

  static fromIntradayRawResponse(
    rawItem: IntradayRawResponse
  ): IntradayResponse {
    return Object.keys(rawItem).reduce((prev, curr) => {
      switch (curr) {
        case 'Meta Data':
          prev.metaData =
            IntradayResponseMetadata.fromIntradayRawResponseMetaData(
              rawItem[curr]
            );
          break;
        case 'Time Series (1min)':
        case 'Time Series (5min)':
        case 'Time Series (15min)':
        case 'Time Series (30min)':
        case 'Time Series (60min)':
        default:
          console.log(`curr: ${curr}`);
          prev.timeSeries =
            IntradayResponseTimeSeries.fromIntradayRawResponseTimeSeries(
              (rawItem as any)[curr]
            );
          break;
      }
      return prev;
    }, {} as any);
  }
}
export interface IntradayRawResponseMetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Interval': string;
  '5. Output Size': string;
  '6. Time Zone': string;
}

export class IntradayResponseMetadata {
  information: string = '';
  symbol: string = '';
  lastRefreshed: string = '';
  interval: string = '';
  outputSize: string = '';
  timeZone: string = '';

  static fromIntradayRawResponseMetaData(
    rawItem: IntradayRawResponseMetaData
  ): IntradayResponseMetadata {
    return {
      information: rawItem['1. Information'],
      symbol: rawItem['2. Symbol'],
      lastRefreshed: rawItem['3. Last Refreshed'],
      interval: rawItem['4. Interval'],
      outputSize: rawItem['5. Output Size']?.toLocaleLowerCase(),
      timeZone: rawItem['6. Time Zone'],
    };
  }
}

export interface IntradayRawResponseTimeSeries {
  /**
   * timestamps are in 'yyyy-mm-dd hh:mm:ss' format
   */
  [timestamp: string]: IntradayRawResponseTimeSeriesItem;
}

export class IntradayResponseTimeSeries {
  static fromIntradayRawResponseTimeSeries(
    rawItem: IntradayRawResponseTimeSeries
  ): IntradayResponseTimeSeries {
    return Object.keys(rawItem).reduce((prev, curr) => {
      (prev as any)[curr] =
        IntradayResponseTimeSeriesItem.fromIntradayRawResponseTimeSeriesItem(
          rawItem[curr]
        );
      return prev;
    }, {});
  }
}

export interface IntradayRawResponseTimeSeriesItem {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export class IntradayResponseTimeSeriesItem {
  open: number = 0;
  high: number = 0;
  low: number = 0;
  close: number = 0;
  volume: number = 0;

  static fromIntradayRawResponseTimeSeriesItem(
    rawItem: IntradayRawResponseTimeSeriesItem
  ): IntradayResponseTimeSeriesItem {
    console.log(`rawItem: ${rawItem}`);
    console.log(`rawItem['1. open']: ${rawItem['1. open']}`);
    console.log(
      `parseFloat(rawItem['1. open']): ${parseFloat(rawItem['1. open'])}`
    );
    return {
      open: parseFloat(rawItem['1. open']),
      high: parseFloat(rawItem['2. high']),
      low: parseFloat(rawItem['3. low']),
      close: parseFloat(rawItem['4. close']),
      volume: parseInt(rawItem['5. volume']),
    };
  }
}
