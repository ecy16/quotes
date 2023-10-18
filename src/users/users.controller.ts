import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  
// @Get()
// read():Promise<User[]>{
//   return this.usersService.readAll()
// }

  @Post('create')
  async create(@Body() userDto: CreateUserDto): Promise<any> {
    return this.usersService.create(userDto);
  }
  @Get()
  findOne(@Query('username') username){
    return this.usersService.findUser(username)
  
  }
@Get()
findAll(){
  return this.usersService.findAll()
}
// @Get('password')
//   findOne(@Param('password') password: string) {
//     return this.usersService.findOne(password);
//   }
// @Get('/:email')
// async findUserByEmail(@Param('email') email: string): Promise<User> {
//     const user=await this.usersService.findOneByEmail(email)
//     if(!user){
//       throw new NotFoundException('user not found')
//     }
//     return user;
//   }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete('username')
  remove(@Param('username') username: string) {
    return this.usersService.remove(username);
  }
}
