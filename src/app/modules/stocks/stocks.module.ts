import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StocksHomeComponent } from './pages/stocks-home/stocks-home.component';
import { StocksRoutingModule } from './stocks-routing.module';
import { StocksHomeHeaderComponent } from './pages/stocks-home/stocks-home-header/stocks-home-header.component';

@NgModule({
  declarations: [StocksHomeComponent, StocksHomeHeaderComponent],
  imports: [SharedModule, StocksRoutingModule],
})
export class StocksModule {}
