import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AlphaVantageApiService } from '../alpha-vantage-api/alpha-vantage-api.service';
import { SearchEndPointParameters } from './search-endpoint.schema';
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
});
