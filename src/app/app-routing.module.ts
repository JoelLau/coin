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
          import('./modules/stocks/stocks.module').then((m) => m.StocksModule),
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
