import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { Quote } from './entities/quote.entity';
import { RoleGuard } from 'src/auth/guards/role.guard';


@Module({
  imports: [TypeOrmModule.forFeature([ Quote])],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
