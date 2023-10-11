import { Injectable, CanActivate, ExecutionContext, Logger,UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { jwtContants } from '../constants';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    private readonly logger = new Logger(AuthGuard.name);
constructor(private jwtService:JwtService){}

async canActivate(context:ExecutionContext):Promise<boolean>{
  const request = context.switchToHttp().getRequest();
const token = this.extractTokenFromHeader(request)
if (!token){
  throw new UnauthorizedException()
}
try{
  const payload = await this.jwtService.verifyAsync(
    token,
    {
      secret:jwtContants.secret
    }
  )
  request['user']=payload;
  }catch{
    throw new UnauthorizedException();
  }
return true;
}

private extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}
  
}
