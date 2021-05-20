import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StackedLayoutComponent } from './layout/stacked-layout/stacked-layout.component';

const routes: Routes = [
  {
    path: '',
    component: StackedLayoutComponent,
    children: [
      {
        path: 'stocks',
        loadChildren: () =>
          import('./modules/stocks/stocks.module').then((m) => m.StocksModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
