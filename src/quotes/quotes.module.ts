import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { Quote } from './entities/quote.entity';
import { quotesRepository } from './quotes.repository';
@Module({
  imports: [TypeOrmModule.forFeature([quotesRepository, Quote])],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
