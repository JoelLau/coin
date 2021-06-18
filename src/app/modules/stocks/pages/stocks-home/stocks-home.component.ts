import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StocksHomeHeaderFields } from './stocks-home-header/stocks-home-header.component';

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.scss'],
})
export class StocksHomeComponent {
  constructor() {}

  getStock(): Observable<StocksHomeHeaderFields> {
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
