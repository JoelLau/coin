import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StackedLayoutComponent } from './layout/components/stacked-layout/stacked-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  {
    path: '',
    component: StackedLayoutComponent,
    children: [
      {
        path: 'stocks',
        loadChildren: () =>
          import('./modules/stock-quote/stock-quote.module').then(
            (m) => m.StockQuoteModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/stocks', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
