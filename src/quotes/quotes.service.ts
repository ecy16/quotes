import { Injectable, Scope} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Repository } from 'typeorm';
import { Quote } from './entities/quote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { quotesRepository } from './quotes.repository';

@Injectable({scope:Scope.REQUEST})
export class QuotesService {

  private userId:string;

  setUserId(userId:string){
    this.userId=userId;
  }
  getUserId(){
    return this.userId;
  }

  quotes=[
    {
      id:1,
      text:'Spread love everywhere you go'
    },
    {
      id:2,
      text:'The only thing we have to fear is fear itself'
    },
    {
      id:3,
      text:'Darkness cannot drive out darkness: only light can do that.'
    }
  ]

  constructor(@InjectRepository(quotesRepository)
  private quotesRepository:quotesRepository)
  {}
  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
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
