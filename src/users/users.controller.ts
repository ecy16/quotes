import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
// @Get()
// read():Promise<User[]>{
//   return this.usersService.readAll()
// }

  @Post('create')
  async create(@Body() userDto: CreateUserDto): Promise<any> {
    return this.usersService.create(userDto);
  }
@Get()
findAll(){
  return this.usersService.findAll()
}
@Get('password')
  findOne(@Param('password') password: string) {
    return this.usersService.findOne(password);
  }
  @Get('username')
  async findUserByLogin(@Param('username')username:string){
    const user=await this.usersService.findByLogin(username)
    if(!user){
      throw new NotFoundException('user not found')
    }
    return user;
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete('username')
  remove(@Param('username') username: string) {
    return this.usersService.remove(username);
  }
}
