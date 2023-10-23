import { Injectable,  UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/loginUser.dto';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constants';
import { error, log } from 'console';
import { PassThrough } from 'stream';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // const hashedPassword = await bcrypt.hash(password, salt);

  async login(username: string, password: string) {
       const user = await this.usersService.findUser(username);
    console.log("user----", user);
    if (!user) {
      throw new UnauthorizedException('Invalid User Credentials');
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    console.log(isPasswordMatching)

    if (isPasswordMatching) {
      const payload = { sub: user.id, username: user.username };
      const accessToken = await this.jwtService.signAsync(payload, {
        secret:jwtConstants.privateKey
      });

      return { access_token: accessToken };
    } else {
      throw new UnauthorizedException('Invalid password');
      console.log(error);
      
    }
  }
  // async validateUser(username:string,password:string): Promise<any>{
  //   const user = await this.usersService.findUser(username);
  //   if(user && (await user.validatePassword(password))){
  //     const {password,...result}=user;
  //     return result;
  //   }
  //   return null;
  // }
}
