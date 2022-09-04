import { ICategory } from './../../ViewModels/icategory';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
  @ViewChild("categorySelect")categorySelectChild!: ElementRef;
  categoryList:ICategory[]=[];
  catId:number=0;
  TotalOrderPrice=0;

  constructor() {
    this.categoryList=[
      {Id:1,Name:"Laptops"},
      {Id:2,Name:"Tabs"},
      {Id:3,Name:"Phones"}
    ]
   }

   onTatalTotalPriceChanged(totalprice:number):void
   {
    this.TotalOrderPrice+=totalprice;
   }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.categorySelectChild.nativeElement.style.width='100%'
    console.log(`ngAfterViewInit ${this.categorySelectChild.nativeElement.style.width} `)
  }
}
