import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!:FormGroup;
  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      Email:['',[Validators.email,Validators.required,Validators.minLength(7)]],
      Password:['',[Validators.required,Validators.minLength(6)]]

    })
  }
  Login()
  {
    this.userService.login("TokenVlaid");
  }
  loguot()
  {
    this.userService.logout();
  }
}
