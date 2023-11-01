import { RolesBuilder } from "nest-access-control";
import { AccessControl } from 'accesscontrol';


export enum UserRoles{

    USER = 'USER_CREATE_ANY_QUOTE',
    ADMIN = 'ADMIN_UPDATE_OWN_QUOTE'
}
 export const roles:RolesBuilder = new RolesBuilder();

//  roles.grant(UserRoles.USER)
//  .createOwn('quote')
//  .deleteOwn('quote')
//  .readAny('quote')
//  .grant(UserRoles.ADMIN)
//  .extend(UserRoles.USER)
//  .updateAny('quote',['title'])
//  .deleteAny('quote')

 const ac = new AccessControl();
ac.grant(UserRoles.USER)
 .createOwn('quote')
 .deleteOwn('quote')
 .readOwn('quote')
 .readAny('quote')
 .grant(UserRoles.ADMIN)
 .extend(UserRoles.USER)
 .updateAny('quote',['title'])
 .deleteAny('quote')
 
 let permission = ac.can('USER_CREATE_ANY_QUOTE').createOwn('quote');
 console.log(permission.granted);    
 console.log(permission.attributes); 

  permission = ac.can('ADMIN_UPDATE_OWN_QUOTE').updateAny('quote');
 console.log(permission.granted); 
 console.log(permission.attributes);