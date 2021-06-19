import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockQuoteComponent } from './pages/stock-quote/stock-quote.component';

const routes: Routes = [
  {
    path: '',
    component: StockQuoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockQuoteRoutingModule {}
