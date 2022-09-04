import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList:IProduct[];
  TotalPrice:number;
constructor()
{
  this.TotalPrice=0;
    this.ProductList=[
      {Id:1,Name:"Lenovo x230",Quantity:5,Price:2000,CategoryId:1},
    {Id:2,Name:"Dell Latitude",Quantity:2,Price:5000,CategoryId:1},
    {Id:3,Name:"lenovo tab",Quantity:9,Price:2000,CategoryId:2},
    {Id:4,Name:"Ipad",Quantity:3,Price:2500,CategoryId:2},
    {Id:5,Name:"Realme",Quantity:4,Price:1400,CategoryId:3},
    {Id:6,Name:"infinix",Quantity:19,Price:2000,CategoryId:3}
  ]
 }
 getAllProduct():IProduct[]
 {
  return this.ProductList;
 }
 getProductbyId(pId:number):IProduct
 {
  return this.ProductList.find((prod)=>{return prod.Id==pId})!;
 }
 getProductsByCatId(CatId:number):IProduct[]
 {
   if(CatId== 0 || CatId?.toString()=="")
   {
     return this.ProductList;
   }
  else
  {
   return this.ProductList.filter((prod)=>{return prod.CategoryId==CatId});
  }
 }

}
