import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
//   (response)=>{
//     console.log('Registration succesful',response);
//   },
//   (error)=>{
//     console.log('Registratio error',error);
//   }
// )

  constructor(
    private userService: UserService,
    authService: AuthService,
  ) {}

  user={
    username:'',
    password:''
  }

  login() {
    this.userService.login({
      username:'',
      password: ''
    }).subscribe((response) => {
      console.log('login successful', response);
    });
  }

  // this.userService.register(user).subscribe(
  //   (response)=>{
  //     console.log('Registration succesful',response);

  //   },
  //   (error)=>{
  //     console.log('Registratio error',error);

  //   }
  // )
}
