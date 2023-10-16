import { Injectable,UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}
    
      async signIn(username, pass) {
        const user = await this.usersService.findOne(username);
        if (!user || user.password !== pass) {
            throw new UnauthorizedException('user not found');
        }
      //   const isPassWordValid= await this.validatePassword(password,user.password)
      //  if(!isPassWordValid){
      //   throw new UnauthorizedException('invalid password')
      //  }
        const payload = { sub: user.userId, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
  validatePassword(password: any, password1: any) {
    throw new Error('Method not implemented.');
  }
}
