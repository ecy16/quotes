import { Injectable, Scope} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Repository } from 'typeorm';
import { Quote } from './entities/quote.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable({scope:Scope.REQUEST})
export class QuotesService {

  private userId:string;

  setUserId(userId:string){
    this.userId=userId;
  }
  getUserId(){
    return this.userId;
  }

  
  constructor(@InjectRepository(Quote)
  private quotesRepository:Repository<Quote>)
  {}
  create(createQuoteDto: CreateQuoteDto) {
    const { text} = createQuoteDto;
     const quote = new Quote();
     quote.text= text;
       return this.quotesRepository.save(quote)

  }

  findAllQuotes() {
    return `This action returns all quotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quote`;
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return `This action removes a #${id} quote`;
  }
  // async createNewQuote(quote:CreateQuoteDto){
  //   return await this.quotesRepository.save(Quote);
  // }
}
