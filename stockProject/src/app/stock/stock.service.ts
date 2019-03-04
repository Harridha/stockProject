import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  req = '../assets/priceSheet.json';
  private stockList = [];
  constructor(private http: HttpClient) { }

  getStockDetails() {
    return this.http.get(this.req);
  }

  setStockList(stockList) {
    this.stockList = stockList;
  }

  getStockList() {
    return this.stockList;
  }
}
