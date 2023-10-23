import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
} from '@nestjs/common';
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
  findOne(@Query('username') username) {
    return this.usersService.findUser(username);
  }
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }
  @Delete('username')
  remove(@Param('username') username: string) {
    return this.usersService.remove(username);
  }
}
