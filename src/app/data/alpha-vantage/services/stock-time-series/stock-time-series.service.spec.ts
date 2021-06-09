import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AlphaVantageApiService } from '../alpha-vantage-api/alpha-vantage-api.service';
import { SearchEndPointParameters } from './search-endpoint.schema';
import { StockTimeSeriesService } from './stock-time-series.service';

describe('StockTimeSeriesService', () => {
  let service: StockTimeSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlphaVantageApiService],
    });
    service = TestBed.inject(StockTimeSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('searchEndPoint', () => {
    it('should call correctly with string params', () => {
      // arrange
      const params: string = 'microsoft';
      const mockService = TestBed.inject(AlphaVantageApiService);
      const querySpy = spyOn(mockService, 'query').and.returnValue(
        of({ bestMatches: [] })
      );

      //act
      service.searchEndPoint(params).subscribe();

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
      const mockService = TestBed.inject(AlphaVantageApiService);
      const querySpy = spyOn(mockService, 'query').and.returnValue(
        of({ bestMatches: [] })
      );

      //act
      service.searchEndPoint(params).subscribe();

      //assert
      expect(querySpy).toHaveBeenCalledWith({
        function: 'SYMBOL_SEARCH',
        keywords: 'microsoft',
      });
    });
  });
});
