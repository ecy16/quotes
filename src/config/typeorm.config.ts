import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { Quote } from 'src/quotes/entities/quote.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'NinjaApi',
  entities: [Author, Quote],
  synchronize: true,
};
