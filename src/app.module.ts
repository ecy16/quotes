import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { DataSource } from 'typeorm';
import {Quote} from './quotes/entities/quote.entity'
import { Author } from './authors/entities/author.entity';
import { apiTokenMiddleware } from './commons/middleware/apiTokenMiddlware';
import { QuotesService } from './quotes/quotes.service';
import { quotesRepository } from './quotes/quotes.repository';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [QuotesModule, AuthorsModule, CategoriesModule,ConfigModule.forRoot({
    isGlobal:true,
  }),TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'NinjaApi',
    entities: [Quote,Author],
    synchronize: true,}), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService,QuotesService,quotesRepository],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(apiTokenMiddleware).forRoutes({path:'*',method:RequestMethod.ALL})
  }
  constructor(private dataSource: DataSource) {}
}
