import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockQuotePriceChartSectionComponent } from './stock-quote-price-chart-section.component';

describe('StockQuotePriceChartSectionComponent', () => {
  let component: StockQuotePriceChartSectionComponent;
  let fixture: ComponentFixture<StockQuotePriceChartSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockQuotePriceChartSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockQuotePriceChartSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
