import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

async create(registerUserDto:RegisterUserDto):Promise<User>{
  const { username, password ,email} = registerUserDto;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const user = new User();
  user.username = username;
  user.email=email;
  user.password = hashedPassword;
  
  return this.userRepository.save(user);
}

  async findUser(username:string): Promise<User> {
    const user = this.userRepository.findOne({where: {username}})

    return user

  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async remove(password:string){
    return await this.userRepository.delete(password)
  }

  
}
