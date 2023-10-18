import { Injectable,UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/loginUser.dto';
import { UserInfo } from 'os';

@Injectable()
export class AuthService {
    
    constructor(
        private usersService: UsersService,
        private authService:AuthService,
        private jwtService: JwtService
      ) {}
   

      async login(loginUserDto:LoginUserDto){
        const {username,password}=loginUserDto;

        const user = await this.usersService.findUser(username);

        if (!user) {
          throw new UnauthorizedException('Invalid username or password');
        }
    
        const passwordIsValid = await user.validatePassword(password);
    
        if (!passwordIsValid) {
          throw new UnauthorizedException('Invalid username or password');
        }
    
        const payload = { sub: user.id, username: user.username };
        const accessToken = await this.jwtService.signAsync(payload);
    
        return { access_token: accessToken };
      }

      
//       async signIn(username, pass) {
//         const user = await this.usersService.findUser(username);
//         console.log('lorem lorem')
//         if (!user) {
//           throw new UnauthorizedException('Invalid username or password');
//         }
//         // if (!user || user.password !== pass) {
//         //     throw new UnauthorizedException('user not found');
//         // }
//       //   const isPassWordValid= await this.validatePassword(password,user.password)
//       //  if(!isPassWordValid){
//       //   throw new UnauthorizedException('invalid password')
//       //  }
//         const payload = {  sub: user.username };
//         return {
//           access_token: await this.jwtService.signAsync(payload),
//         };
//       }
//   validatePassword(password: any, password1: any) {
//     throw new Error('Method not implemented.');
//   }
// // async login(loginUserDto:LoginUserDto):Promise<any>{
// //   const user = await this.usersService.findByLogin(loginUserDto)
// // return{
// //   username:user.username
// // }
// // }



}
