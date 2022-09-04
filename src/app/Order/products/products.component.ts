import { IProduct } from './../../ViewModels/iproduct';
import { Component, OnInit } from '@angular/core';
import { GetProductFromApiService } from 'src/app/Services/getProductFromApi.service';
import { ProductViewModel } from 'src/app/ViewModels/ProductViewModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prdList!:ProductViewModel[];
  constructor(private productService:GetProductFromApiService) { }
  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      (Response)=>{
        this.prdList=Response;
        console.log(this.prdList[0])
      },
      (err)=>{
        console.log(err)
      }
    );
  }

}
