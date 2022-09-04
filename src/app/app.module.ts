import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponents/header/header.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { ContentComponent } from './Components/LayoutComponents/content/content.component';
import { HomeComponent } from './Components/home/home.component';
import { HighLightDirective } from './Directives/HighLight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { USDtoEGPPipe } from './Pipes/USDtoEGP.pipe';
import { OrderMasterComponent } from './Order/order-master/order-master.component';
import { OrderDeatailsComponent } from './Order/order-deatails/order-deatails.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Order/product-details/product-details.component';
import { ProductsComponent } from './Order/products/products.component';
import { NewProductComponent } from './Order/new-product/new-product.component';
import { LoginComponent } from './Components/User/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    HighLightDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    OrderDeatailsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductsComponent,
    NewProductComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
