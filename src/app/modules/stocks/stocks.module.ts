import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StocksHomeComponent } from './pages/stocks-home/stocks-home.component';
import { StocksRoutingModule } from './stocks-routing.module';

@NgModule({
  declarations: [StocksHomeComponent],
  imports: [CommonModule, StocksRoutingModule],
})
export class StocksModule {}
