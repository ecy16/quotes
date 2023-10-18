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
  async findUser(username:string): Promise<User> {
    const user = this.userRepository.findOne({where: {username}})

    return user

  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async remove(username:string){
    return await this.userRepository.delete(username)
  }

  // async findOneByEmail(email: string): Promise<User> {
  //   const user = await this.userRepository.findOne({ where: { email } });
  
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  
  //   return user;
  // }
  
// async findByLogin(username:string):Promise<User | undefined>{
//   return this.userRepository.findOne({where:{username}})
// }

  
  // async update(username:string,updateUserDto:UpdateUserDto){
   
  //   return await this.userRepository.save(updated)
  // }
}
