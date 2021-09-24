import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SignUpModel } from '../signup/signup.model';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../login/login.model';
import { LoginResponse } from '../login/login.reponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>(environment.endpoint + '/api/auth/refresh/token',
      this.refreshTokenPayload)
      .pipe(tap(response => {
        window.localStorage.removeItem('authenticationToken');
        window.localStorage.removeItem('expiresAt');
        window.localStorage.setItem('authenticationToken', response.authenticationToken);
        window.localStorage.setItem('expiresAt', response.expiresAt.toString());
      }));
  }
  login(loginModel: LoginModel): Observable<boolean> {
    return this.httpClient.post<LoginResponse>(environment.endpoint + '/api/auth/login', loginModel).pipe(
      map(data => {
        window.localStorage.setItem('authenticationToken', data.authenticationToken);
        window.localStorage.setItem('username', data.username);
        window.localStorage.setItem('refreshToken', data.refreshToken);
        window.localStorage.setItem('expiresAt', data.expiresAt.toString());
        return true;
      })
    )
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  signup(signUpModel: SignUpModel): Observable<any> {
    return this.httpClient.post(environment.endpoint + '/api/auth/signup', signUpModel, { responseType: 'text' })
  }

  getJwtToken() {
    return window.localStorage.getItem('authenticationToken');
  }

  getUserName() {
    return window.localStorage.getItem('username');
  }
  getRefreshToken() {
    return window.localStorage.getItem('refreshToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
}
