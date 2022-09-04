import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetProductFromApiService } from 'src/app/Services/getProductFromApi.service';
import { PostProductViewModel } from 'src/app/ViewModels/PostProductViewModel';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  prd:PostProductViewModel;
  constructor(private productService:GetProductFromApiService,
              private router:Router)
  {
    this.prd=new PostProductViewModel();
  }
  addProduct()
  {
    console.log(this.prd);
    this.productService.addProduct(this.prd).subscribe(
      (response)=>{
        this.router.navigateByUrl("/Products")
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {

  }

}
