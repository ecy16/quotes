import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from 'src/users/dto/loginUser.dto';
import { RegisterUserDto } from 'src/users/dto/registerUser.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() registerUserDto: RegisterUserDto) {
    return this.usersService.create(registerUserDto);
  }
  
  @Post('sign-in')
  async signIn(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }







  
  // @Post('login')
  // signIn(@Body() signInDto: LoginUserDto) {
  //   const {username, password} = signInDto
  //   return this.authService.signIn(username, password);
  // }
  // @UseGuards(AuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
  // @Post('login')
  // async login(@Body() userLoginDto: UserLoginDto) {
  //   const token = await this.authService.signIn(userLoginDto.username, userLoginDto.password);
  //   return { access_token: token };
  // }
}
