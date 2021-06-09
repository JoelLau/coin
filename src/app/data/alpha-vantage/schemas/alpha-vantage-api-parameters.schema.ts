/**
 * query parameters to be sent to alpha vantage's web api
 */
export interface AlphaVantageApiParameters {
  /**
   * function is a reserved keyword in ES6
   */
  function: AlphaVantageApiParameterFunction;

  /**
   * override provided api key
   */
  apikey?: string;

  /**
   * additional parameters
   */
  [key: string]: any;
}

export type AlphaVantageApiParameterFunction =
  | 'SYMBOL_SEARCH'
  | 'GLOBAL_QUOTE'
  | string;
