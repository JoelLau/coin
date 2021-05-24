import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StocksHomeComponent } from './pages/stocks-home/stocks-home.component';
import { StocksRoutingModule } from './stocks-routing.module';

@NgModule({
  declarations: [StocksHomeComponent],
  imports: [SharedModule, StocksRoutingModule],
})
export class StocksModule {}
