import { RolesBuilder } from "nest-access-control";

export enum UserRoles{

    USER = 'USER_CREATE_ANY_QUOTE',
    ADMIN = 'ADMIN_UPDATE_OWN_QUOTE'
}
 export const roles:RolesBuilder = new RolesBuilder();

 roles.grant(UserRoles.USER)
 .createOwn('quote')
 .deleteOwn('quote')
 .readAny('quote')
 .grant(UserRoles.ADMIN)
 .extend(UserRoles.USER)
 .updateAny('quote',['title'])
 .deleteAny('quote')
