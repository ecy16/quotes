import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  register() {
    const user = {
      username: '',
      password: '',
    };
    // this.userService.register(user).subscribe(
    //   (response)=>{
    //     console.log('Registration succesful',response);
        
    //   },
    //   (error)=>{
    //     console.log('Registratio error',error);
        
    //   }
    // )
  }

  
  
}
