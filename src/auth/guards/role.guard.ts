import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserRoles } from '../user.roles';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; 
    //query db to get roles

    if (user && user.role) {
      return [UserRoles.ADMIN, UserRoles.USER].includes(user.role);
    }
console.log(UserRoles);

    return false;
  }
  }
