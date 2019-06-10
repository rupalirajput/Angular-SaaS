import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostUrl = 'http://localhost:1234/';
  // hostUrl = '/';

  constructor(private httpClient: HttpClient) { }

  getGoogleLogin() {
    return this.httpClient.get<string>( this.hostUrl + 'auth/google');
  }
}
