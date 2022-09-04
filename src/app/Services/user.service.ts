import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(token:string)
  {
    localStorage.setItem("UserToken",token);
  }
logout()
{
  localStorage.removeItem("UserToken");
}
isLogged():boolean
{
  if(localStorage.getItem("UserToken"))
  return true
  else
  return false
}
}
