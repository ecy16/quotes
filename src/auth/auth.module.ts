// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// // import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';
// import { JwtModule } from '@nestjs/jwt';
// import {jwtConstants}from './constants';
// import { UsersService } from 'src/users/users.service';

// @Module({
//   imports: [UsersModule,JwtModule.register({
//     global: true,
//     secret: jwtConstants.secret,
//     signOptions: { expiresIn: '60s' },
//   })
// ],
//   // controllers: [AuthController],
//   // providers: [AuthService,UsersService],
//   // exports: [AuthService],

// })
// export class AuthModule {}
