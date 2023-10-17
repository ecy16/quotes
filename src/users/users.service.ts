import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(userDto);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({where:{username}});
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
async findByLogin(username:string):Promise<User | undefined>{
  return this.userRepository.findOne({where:{username}})
}

  
  // async update(username:string,updateUserDto:UpdateUserDto){
   
  //   return await this.userRepository.save(updated)
  // }
  async remove(username:string){
    return await this.userRepository.delete(username)
  }
}
