import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAuthorDto } from '../../authors/dto/create-author.dto';
import { CreateCategoryDto } from '../../categories/dto/create-category.dto';

export class CreateQuoteDto {
  @IsString()
  @IsNotEmpty()
  
  quote:string;
  id:number;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CreateAuthorDto)
  readonly author: CreateAuthorDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CreateCategoryDto)
  readonly category: CreateCategoryDto;
}
