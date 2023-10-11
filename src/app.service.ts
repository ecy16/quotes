import { Injectable } from '@nestjs/common';
import { QuotesService } from './quotes/quotes.service';

@Injectable()
export class AppService {
  [x: string]: any;
  constructor(private readonly quotesService:QuotesService){}

  getHello(): string {
    const userId = this.quotesService.getUserId()
    this.logger.log('getHello userId:',userId)
    return 'Hello World!';
  }
  
}
