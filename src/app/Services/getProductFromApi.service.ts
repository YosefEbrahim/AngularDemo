import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductViewModel } from '../ViewModels/ProductViewModel';
import { PostProductViewModel } from '../ViewModels/PostProductViewModel';

@Injectable(
  {
    providedIn: "root"
  }
)

export class GetProductFromApiService {

constructor(private httpClient:HttpClient) { }

getAllProducts():Observable<ProductViewModel[]>
{
   return this.httpClient.get<ProductViewModel[]>(`${environment.API_URL}getproducts`)
}

getProductById(pid:number):Observable<ProductViewModel>
{
   return this.httpClient.get<ProductViewModel>(`${environment.API_URL}getproduct/${pid}`)
}
addProduct(prd:PostProductViewModel)
{
  return this.httpClient.post(`${environment.API_URL}insert`,prd)
}
}
