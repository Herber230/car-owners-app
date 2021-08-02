import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

type AuthenticateResponse = {
  message: string;
  success: boolean;
  token: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {

  }

  authenticate(user: string, pass: string) {
    const url = `${BASE_URL}/authenticate`;
    return this.httpClient.post<AuthenticateResponse>(url, {user, pass});
  }

  
}
