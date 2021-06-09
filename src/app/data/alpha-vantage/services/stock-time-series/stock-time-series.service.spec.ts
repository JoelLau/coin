import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { QuoteEndPointParameters } from '@data/alpha-vantage/schemas/search-endpoint-quote-endpoint.schema';
import { SearchEndPointParameters } from '@data/alpha-vantage/schemas/search-endpoint-search-endpoint.schema';
import { of } from 'rxjs';
import { AlphaVantageApiService } from '../alpha-vantage-api/alpha-vantage-api.service';
import { StockTimeSeriesService } from './stock-time-series.service';

describe('StockTimeSeriesService', () => {
  let stockTimeSeriesService: StockTimeSeriesService;
  let alphaVantageApiService: AlphaVantageApiService;

  beforeEach(() => {
    alphaVantageApiService = jasmine.createSpyObj(['query']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    stockTimeSeriesService = TestBed.inject(StockTimeSeriesService);
    alphaVantageApiService = TestBed.inject(AlphaVantageApiService);
  });

  it('should be created', () => {
    expect(stockTimeSeriesService).toBeTruthy();
  });

  describe('searchEndPoint', () => {
    it('should call correctly with string params', () => {
      // arrange
      const params: string = 'microsoft';
      const querySpy = spyOn(alphaVantageApiService, 'query').and.returnValue(
        of({ bestMatches: [] })
      );

      //act
      stockTimeSeriesService.searchEndPoint(params).subscribe();

      //assert
      expect(querySpy).toHaveBeenCalledWith({
        function: 'SYMBOL_SEARCH',
        keywords: params,
      });
    });

    it('should call correctly with obj params', () => {
      // arrange
      const params: SearchEndPointParameters = {
        function: 'SYMBOL_SEARCH',
        keywords: 'microsoft',
      };
      const querySpy = spyOn(alphaVantageApiService, 'query').and.returnValue(
        of({ bestMatches: [] })
      );

      //act
      stockTimeSeriesService.searchEndPoint(params).subscribe();

      //assert
      expect(querySpy).toHaveBeenCalledWith({
        function: 'SYMBOL_SEARCH',
        keywords: 'microsoft',
      });
    });

    it('[integration test] raw responses should be mapped correctly', () => {
      // arrange
      const params: SearchEndPointParameters = {
        function: 'SYMBOL_SEARCH',
        keywords: 'microsoft',
      };
      spyOn(alphaVantageApiService, 'query').and.returnValue(
        of({
          bestMatches: [
            {
              '1. symbol': 'TESO',
              '2. name': 'Tesco Corporation USA',
              '3. type': 'Equity',
              '4. region': 'United States',
              '5. marketOpen': '09:30',
              '6. marketClose': '16:00',
              '7. timezone': 'UTC-04',
              '8. currency': 'USD',
              '9. matchScore': '0.8889',
            },
          ],
        })
      );

      //act
      stockTimeSeriesService
        .searchEndPoint(params)
        .subscribe((actualResponse) => {
          //assert
          expect(actualResponse).toEqual([
            {
              symbol: 'TESO',
              name: 'Tesco Corporation USA',
              type: 'Equity',
              region: 'United States',
              marketOpen: '09:30',
              marketClose: '16:00',
              timezone: 'UTC-04',
              currency: 'USD',
              matchScore: 0.8889,
            },
          ]);
        });
    });
  });

  describe('quoteEndPoint', () => {
    it('should call correctly with string params ', () => {
      // arrange
      const params: string = 'IBM';
      const querySpy = spyOn(alphaVantageApiService, 'query').and.returnValue(
        of({
          'Global Quote': {
            '01. symbol': 'IBM',
            '02. open': '148.1200',
            '03. high': '150.2000',
            '04. low': '148.1200',
            '05. price': '149.0700',
            '06. volume': '5080099',
            '07. latest trading day': '2021-06-08',
            '08. previous close': '148.0200',
            '09. change': '1.0500',
            '10. change percent': '0.7094%',
          },
        })
      );

      //act
      stockTimeSeriesService.quoteEndPoint(params).subscribe();

      //assert
      expect(querySpy).toHaveBeenCalledWith({
        function: 'GLOBAL_QUOTE',
        symbol: params,
      });
    });

    it('should call correctly with object params', () => {
      // arrange
      const params: QuoteEndPointParameters = {
        function: 'GLOBAL_QUOTE',
        symbol: 'IBM',
      };
      const querySpy = spyOn(alphaVantageApiService, 'query').and.returnValue(
        of({
          'Global Quote': {
            '01. symbol': 'IBM',
            '02. open': '148.1200',
            '03. high': '150.2000',
            '04. low': '148.1200',
            '05. price': '149.0700',
            '06. volume': '5080099',
            '07. latest trading day': '2021-06-08',
            '08. previous close': '148.0200',
            '09. change': '1.0500',
            '10. change percent': '0.7094%',
          },
        })
      );

      //act
      stockTimeSeriesService.quoteEndPoint(params).subscribe();

      //assert
      expect(querySpy).toHaveBeenCalledWith({
        function: 'GLOBAL_QUOTE',
        symbol: 'IBM',
      });
    });

    it('[integration test] raw responses should be mapped correctly ', () => {
      // arrange
      const params: QuoteEndPointParameters = {
        function: 'GLOBAL_QUOTE',
        symbol: 'IBM',
      };
      spyOn(alphaVantageApiService, 'query').and.returnValue(
        of({
          'Global Quote': {
            '01. symbol': 'IBM',
            '02. open': '148.1200',
            '03. high': '150.2000',
            '04. low': '148.1200',
            '05. price': '149.0700',
            '06. volume': '5080099',
            '07. latest trading day': '2021-06-08',
            '08. previous close': '148.0200',
            '09. change': '1.0500',
            '10. change percent': '0.7094%',
          },
        })
      );

      //act
      stockTimeSeriesService
        .quoteEndPoint(params)
        .subscribe((actualResponse) => {
          //assert
          expect(actualResponse).toEqual({
            symbol: 'IBM',
            open: 148.12,
            high: 150.2,
            low: 148.12,
            price: 149.07,
            volume: 5080099,
            latestTradingDay: new Date(2021, 5, 8),
            previousClose: 148.02,
            change: 1.05,
            changePercent: 0.7094,
          });
        });
    });
  });
});
