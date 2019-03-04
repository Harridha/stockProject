import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stockList = <any>[];
  constructor(private stockService: StockService) {
    // setInterval(() => {
    //   this.getStockDetails();
    // }, 5000);
  }

  getStockDetails() {
     this.stockService.getStockDetails().subscribe(
       (stocks: any) => {
          this.stockList = stocks.data;
          this.stockList.forEach(element => {
            element.price = parseFloat(element.price).toFixed(1);
            element.priceChange = parseFloat(element.priceChange).toFixed(1);
            element.pricePerCentage = parseFloat(element.pricePerCentage).toFixed(1);
          });
          this.stockService.setStockList(this.stockList);
       },
       (error: any) => {
         console.log(error);
       }
     );
  }

  ngOnInit() {
    this.getStockDetails();
  }

}
