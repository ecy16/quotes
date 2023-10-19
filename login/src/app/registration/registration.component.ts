import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };
  constructor(private userService: UserService, private router: Router) {}

  register(){
    this.userService.register(this.user).subscribe(
      (response:any)=>{
        console.log(this.user);
        
      },
      (error:any)=>{
        console.log('Registration error',error);
        
      }
    )
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
    console.log("logged in");
    
  }
  
}
