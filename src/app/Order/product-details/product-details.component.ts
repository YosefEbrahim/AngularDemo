import { ProductViewModel } from 'src/app/ViewModels/ProductViewModel';
import { GetProductFromApiService } from 'src/app/Services/getProductFromApi.service';
import { ProductService } from './../../Services/Product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prd!:ProductViewModel;
  constructor(private activeRoute:ActivatedRoute,
              private prdservice:ProductService,
              private productFromApi:GetProductFromApiService,
              private location:Location,
              private router:Router
  ){}

  ChangeID()
  {
    this.router.navigateByUrl("Product/9")
  }
   goBack()
   {
    this.location.back();
   }
  ngOnInit(): void {
    let prdId:number;
    //let prdId=this.activeRoute.snapshot.params['pid'];
    this.activeRoute.paramMap.subscribe(params=>{
      prdId=Number(params.get('pid'));
      this.productFromApi.getProductById(prdId).subscribe(
        (response)=>{this.prd=response},
        (error)=>{console.log(error)}
      );
    });

    // console.log(prdId)
  }

}
