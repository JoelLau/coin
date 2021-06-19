import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockQuoteHeaderSectionComponent } from './stock-quote-header-section.component';

describe('StockQuoteHeaderSectionComponent', () => {
  let component: StockQuoteHeaderSectionComponent;
  let fixture: ComponentFixture<StockQuoteHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockQuoteHeaderSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockQuoteHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
