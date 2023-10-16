import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.apiUrl}/users/create`, user);
  }
  login(credentials: { username: string, password: string }) {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
