import { Component, OnInit } from '@angular/core';
import { CampanyInfo } from 'src/app/ViewModels/campany-info';
import { IProduct } from 'src/app/ViewModels/iproduct';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  company1:CampanyInfo;
  mainProducts:IProduct[];
  IsServicesdisplayed:boolean;
  constructor() {
    this.IsServicesdisplayed=true;
    this.company1=new CampanyInfo("ITI","/assets/images/250.jpg",["Marckting","Sales","SEO"],1000000,new Date())
    this.mainProducts=[
      {Id:1,Name:"IPhone 11",Quantity:5,Price:20000},
      {Id:2,Name:"Laptop gen 10",Quantity:2,Price:50000},
      {Id:3,Name:"HDD",Quantity:0,Price:2000}
    ]

   }
   toggelServices()
   {
    this.IsServicesdisplayed=!this.IsServicesdisplayed;;
   }
  ngOnInit(): void {
  }

}
