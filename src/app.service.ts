import { Injectable } from '@nestjs/common';
import { QuotesService } from './quotes/quotes.service';
import { UserService } from 'login/src/app/user.service';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
 googleLogin(req){
if(!req.user){
return 'No User From Google'
}
return{
  message:'user info from google',
  user:req.user
}
 }
  
}
