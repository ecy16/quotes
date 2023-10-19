import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {

  formData={
    username:'',
    password:''
  }

  constructor(
    private userService: UserService,
    private http:HttpClient,
    authService: AuthService,
  ) {}

  // login(){
  //   this.http.post('http://localhost:3000',this.formData).subscribe((response)=>{
  //     console.log('hey');
      
  //   })
  // }

  login() {
    this.userService.login({
      username:'',
      password: ''
    }).subscribe((response) => {
      console.log('login successful', response);
    });
  }
}
