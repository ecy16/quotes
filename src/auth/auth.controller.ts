// import {
//   Body,
//   Controller,
//   Get,
//   HttpCode,
//   HttpStatus,
//   Post,
//   Request,
//   UseGuards,
// } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthGuard } from 'src/auth/guards/auth.guard';
// import { UsersService } from 'src/users/users.service';
// @Controller('auth')
// export class AuthController {
//   constructor(
//     private authService: AuthService,
//     private readonly usersService: UsersService,
//   ) {}
//   @HttpCode(HttpStatus.OK)
//   @Post('login')
//   signIn(@Body() signInDto: Record<string, any>) {
//     return this.authService.signIn(signInDto.username, signInDto.password);
//   }
//   @UseGuards(AuthGuard)
//   @Get('profile')
//   getProfile(@Request() req) {
//     return req.user;
//   }
//   // @Post('login')
//   // async login(@Body() userLoginDto: UserLoginDto) {
//   //   const token = await this.authService.signIn(userLoginDto.username, userLoginDto.password);
//   //   return { access_token: token };
//   // }
// }
