import { AuthGuard } from './Components/User/auth.guard';
import { LoginComponent } from './Components/User/login/login.component';
import { NewProductComponent } from './Order/new-product/new-product.component';
import { ProductsComponent } from './Order/products/products.component';
import { ProductDetailsComponent } from './Order/product-details/product-details.component';
import { OrderMasterComponent } from './Order/order-master/order-master.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';


const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Order",component:OrderMasterComponent,canActivate:[AuthGuard]},
  {path:"Products",component:ProductsComponent},
  {path:"NewProduct",component:NewProductComponent},
  {path:"Login",component:LoginComponent},
  {path:"Product/:pid",component:ProductDetailsComponent},
  {path:"Profile",loadChildren:()=>import('src/app/user-profile/user-profile.module').then(m=>m.UserProfileModule)},
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"**",component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
