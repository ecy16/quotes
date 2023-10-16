import { Injectable,NotFoundException, } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from  'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
   private  userRepository: Repository<User>) {}
  
  async create(userDto: CreateUserDto): Promise<User>{
    return await this.userRepository.save(userDto)
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }
  // async readAll():Promise<User[]>{
  //   return await this.users
  // }
}
