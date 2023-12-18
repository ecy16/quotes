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
  user = {
    username: '',
    password: '',
  };

  constructor(
    private userService: UserService,
    private http: HttpClient,
    authService: AuthService,
  ) {}

  login() {
    this.userService
      .login({
        username: '',
        password: '',
      })
      .subscribe((response) => {
        console.log('login successful', response);
      });
  }

  // login(){
  //   console.log("MMMMAAAPPP",this.formData);
  //   this.userService.login(this.formData).subscribe((response) =>{

  //   },
  //   (error:any)=>{
  //     console.log('Registration error',error);
  //       })
  // }

  // login(){
  //   this.http.post('http://localhost:3000',this.formData).subscribe((response)=>{
  //     console.log('hey');

  //   })
  // }
}
