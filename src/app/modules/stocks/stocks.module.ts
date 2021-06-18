import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StocksHomeHeaderComponent } from './pages/stocks-home/stocks-home-header/stocks-home-header.component';
import { StocksHomePriceChartComponent } from './pages/stocks-home/stocks-home-price-chart/stocks-home-price-chart.component';
import { StocksHomeComponent } from './pages/stocks-home/stocks-home.component';
import { StocksRoutingModule } from './stocks-routing.module';

@NgModule({
  declarations: [
    StocksHomeComponent,
    StocksHomeHeaderComponent,
    StocksHomePriceChartComponent,
  ],
  imports: [SharedModule, StocksRoutingModule],
})
export class StocksModule {}
