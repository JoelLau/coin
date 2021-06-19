import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StockQuoteHeaderSectionComponent } from './pages/stock-quote/stock-quote-header-section/stock-quote-header-section.component';
import { StockQuotePriceChartSectionComponent } from './pages/stock-quote/stock-quote-price-chart-section/stock-quote-price-chart-section.component';
import { StockQuoteComponent } from './pages/stock-quote/stock-quote.component';
import { StockQuoteRoutingModule } from './stock-quote-routing.module';

@NgModule({
  declarations: [
    StockQuoteComponent,
    StockQuoteHeaderSectionComponent,
    StockQuotePriceChartSectionComponent,
  ],
  imports: [SharedModule, StockQuoteRoutingModule],
})
export class StockQuoteModule {}
