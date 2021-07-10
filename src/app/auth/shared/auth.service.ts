import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpModel } from '../signup/signup.model';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(loginModel: LoginModel) {
    return this.httpClient.post('http://localhost:8080/api/auth/login', loginModel, { responseType: 'text' })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  signup(signUpModel: SignUpModel): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signUpModel, { responseType: 'text' })
  }
}
