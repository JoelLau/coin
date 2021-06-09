import { Component, OnInit } from '@angular/core';
import { StockTimeSeriesService } from '@data/alpha-vantage/services/stock-time-series/stock-time-series.service';

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.scss'],
})
export class StocksHomeComponent implements OnInit {
  constructor(private stockTimeSeriesService: StockTimeSeriesService) {}

  ngOnInit() {
    this.stockTimeSeriesService
      .searchEndPoint({
        function: 'SYMBOL_SEARCH',
        keywords: 'microsoft',
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
