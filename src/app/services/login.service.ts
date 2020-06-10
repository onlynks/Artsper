import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endPoint  = 'https://www.artsper.com/api/auth/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    const loginData = {
      email: email,
      password: password,
      type:'admin'
    }
    return this.http.post(this.endPoint , loginData);
  }
}
