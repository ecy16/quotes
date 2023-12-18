import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from "@nestjs/common";
import { Verify } from "crypto";

@Injectable()
export class GoogleStategy extends PassportStrategy(Strategy,'google'){
    constructor(){
        super({
            clientID:'63203237290-vlnn92obv1nrvmm3emf7a7kj0pb3sjk7.apps.googleusercontent.com',
            clientSecret:"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",
            callBack:"http://localhost/3000/auth/google/callBack",
            scope:['email','profile'],
            // redirect_uri:["https://www.google.com/"]
        })
    }
    async validate(accessToken:string,refreshToken:string,profile:any,done:VerifyCallback):Promise<any>{
const {name,emails}=profile
const user={
    email:emails[0].value,
    firstName:name.givenName,
    lastName:name.familyName,
    accessToken
}
done(null,user)
    }

}