import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock/stock.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  stockList = <any>[];
  constructor(private route: ActivatedRoute,
              private stockService: StockService) {
    this.getRouterParams();
  }

  getRouterParams() {
    this.route.queryParams.subscribe(param => {
      if (param.id) {
          this.stockList = _.find(this.stockList, {'id': param.id});
      }
    });
  }
  ngOnInit() {
    this.stockList = this.stockService.getStockList();
  }

}
