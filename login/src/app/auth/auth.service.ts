import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

    //auth
    auth(client_id: string, code: string, scope: string){
      return this.http.get(`${this.apiUrl}/api/auth/authorize`, {
        params: {
          client_id, code, scope
      }
      })
    }
    
}
