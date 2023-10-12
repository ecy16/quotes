import {
  BadRequestException,
  Injectable,
  Logger,
  NestMiddleware,
} from '@nestjs/common';
import { log } from 'console';
import { NextFunction, Request, Response } from 'express';
import { QuotesService } from 'src/quotes/quotes.service';

export class apiTokenMiddleware implements NestMiddleware {
  private readonly logger = new Logger(apiTokenMiddleware.name);

  constructor() {}

  use(req: Request, res: Response, next: NextFunction) {
//     this.logger.log(apiTokenMiddleware.name);
//     const userId = '123';
// this.userService.setUserId(userId)
//     next();
  }
}
