import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-quote-header-section',
  templateUrl: './stock-quote-header-section.component.html',
  styleUrls: ['./stock-quote-header-section.component.scss'],
})
export class StockQuoteHeaderSectionComponent {
  @Input() fields: StockQuoteHeaderSectionFields | null = null;
}

export interface StockQuoteHeaderSectionFields {
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
