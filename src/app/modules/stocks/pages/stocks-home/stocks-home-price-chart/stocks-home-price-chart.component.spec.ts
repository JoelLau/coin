import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksHomePriceChartComponent } from './stocks-home-price-chart.component';

describe('StocksHomePriceChartComponent', () => {
  let component: StocksHomePriceChartComponent;
  let fixture: ComponentFixture<StocksHomePriceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StocksHomePriceChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksHomePriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
