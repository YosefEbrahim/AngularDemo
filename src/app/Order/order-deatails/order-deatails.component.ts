import { ProductService } from './../../Services/Product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-deatails',
  templateUrl: './order-deatails.component.html',
  styleUrls: ['./order-deatails.component.css']
})
export class OrderDeatailsComponent implements OnInit,OnChanges {
@Input() SelectCatId:number=0;
@Output() TotalPriceChanged:EventEmitter<number>;
ProductList?:IProduct[];
TotalPrice?:number;
  constructor(private productservice:ProductService,
              private router:Router
    )
  {
    this.TotalPriceChanged=new EventEmitter<number>();
  }
  getProductsByCatId():IProduct[]
  {
    return this.productservice.getProductsByCatId(this.SelectCatId);
  }
  getPrdById(pid:number)
  {
  this.router.navigateByUrl(`/Product/${pid}`)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.SelectCatId)
    console.log(this.getProductsByCatId())
  }

  ngOnInit(): void {
    this.ProductList=this.productservice.getAllProduct();
  }
  addPrice(price:number,pcount:number):void
  {
    this.TotalPrice=0;
    this.TotalPrice+=(price*pcount);
    this.TotalPriceChanged?.emit(this.TotalPrice);

  }
}
