import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AlphaVantageApiParameters } from './alpha-vantage-api-parameters.schema';
import { AlphaVantageApiService } from './alpha-vantage-api.service';

describe('AlphaVantageApiService', () => {
  let service: AlphaVantageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlphaVantageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct url', () => {
    const url = service.getUrl();

    expect(url).toEqual('https://www.alphavantage.co/query');
  });

  it("should provide 'apikey' if not supplied", () => {
    const params: AlphaVantageApiParameters = { function: 'SYMBOL_SEARCH' };
    const queryParams = service.getQueryParameters(params);
    const { apikey } = queryParams;

    expect(apikey).toBeTruthy();
  });

  it("should NOT override 'apikey' if it IS supplied", () => {
    const params: AlphaVantageApiParameters = {
      function: 'SYMBOL_SEARCH',
      apikey: 'asdf',
    };
    const queryParams = service.getQueryParameters(params);
    const { apikey } = queryParams;

    expect(apikey).toBe('asdf');
  });

  it('should make http get request to url', () => {
    // arrange
    const mockHttpClient = TestBed.inject(HttpClient);
    const httpClientGetSpy = spyOn(mockHttpClient, 'get').and.returnValue(
      of(null)
    );
    const params: AlphaVantageApiParameters = {
      function: 'SYMBOL_SEARCH',
      keywords: 'microsoft',
      apikey: 'demo',
    };

    // act
    service.query(params).subscribe();

    // assert
    // eslint-disable-next-line jasmine/prefer-toHaveBeenCalledWith
    expect(httpClientGetSpy).toHaveBeenCalled();
  });
});
