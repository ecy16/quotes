import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new AuthGuard)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
    
  }));
  await app.listen(3000);

}
bootstrap();
