import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { DataSource } from 'typeorm';
import { Quote } from './quotes/entities/quote.entity';
import { Author } from './authors/entities/author.entity';
import { apiTokenMiddleware } from './commons/middleware/apiTokenMiddlware';
import { QuotesService } from './quotes/quotes.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './auth/user.roles';
 import { AccessControl } from 'accesscontrol';


@Module({
  imports: [
    QuotesModule,
    AuthorsModule,
    CategoriesModule,
    AuthModule,
    UsersModule,
    AccessControl,
    AccessControlModule.forRoles(roles),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'NinjaApi',
      entities: [Quote, Author, User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(apiTokenMiddleware).forRoutes({path:'*',method:RequestMethod.ALL})
  }
  constructor(private dataSource: DataSource) {}
}
