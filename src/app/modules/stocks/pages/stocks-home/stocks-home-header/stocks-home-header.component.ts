import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stocks-home-header',
  templateUrl: './stocks-home-header.component.html',
  styleUrls: ['./stocks-home-header.component.scss'],
})
export class StocksHomeHeaderComponent {
  @Input() fields: StocksHomeHeaderFields | null = null;

  constructor() {}
}

export interface StocksHomeHeaderFields {
  symbol: string;
  companyName: string;
  open: number;
  currency: string;
  change: number;
  changePercent: number;
  exchange: string;
  country: string;
  latestTradingDay: Date;
}
