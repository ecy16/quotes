import { IsEmail, IsNotEmpty, isEmail, isNotEmpty } from 'class-validator';

export class userDto {
  @IsNotEmpty() id: string;
  @IsNotEmpty() username: string;
  @IsNotEmpty() @IsEmail() email: string;
}
