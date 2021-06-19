import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockQuoteHeaderSectionFields } from './stock-quote-header-section/stock-quote-header-section.component';

@Component({
  selector: 'app-stock-quote',
  templateUrl: './stock-quote.component.html',
  styleUrls: ['./stock-quote.component.scss'],
})
export class StockQuoteComponent {
  getStock(): Observable<StockQuoteHeaderSectionFields> {
    return of({
      symbol: 'AAPL',
      companyName: 'Apple Inc',
      open: 132.9,
      currency: 'USD',
      change: 0.47,
      changePercent: 0.36,
      exchange: 'NASDAQ',
      country: 'United States',
      latestTradingDay: new Date(),
    });
  }
}
