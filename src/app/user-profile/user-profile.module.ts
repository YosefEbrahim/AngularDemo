import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes:Routes=[
  {path:"MyProfile",component:MyProfileComponent},
  {path:"EditProfile",component:EditProfileComponent},
  {path:"",redirectTo:"/MyProfile",pathMatch:'full'},

]

@NgModule({
  declarations: [
    MyProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileModule { }
