import { Injectable } from '@nestjs/common';
import { QuotesService } from './quotes/quotes.service';
import { UserService } from 'login/src/app/user.service';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  [x: string]: any;
  constructor(){}

  getHello(): string {
    
    return 'Hello World!';
  }
  
}
