import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksHomeComponent } from './pages/stocks-home/stocks-home.component';

const routes: Routes = [
  {
    path: '',
    component: StocksHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocksRoutingModule {}
