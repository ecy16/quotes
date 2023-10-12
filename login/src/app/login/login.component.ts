import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
user={
  username:'',
  password:''
}

constructor(private router:Router){}

onSubmit(){
  this.router.navigate(['/'])
}
}
