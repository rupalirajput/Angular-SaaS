import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IAccountModel from '../share/IAccountModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   // hostUrl = 'http://localhost:1234/';
    hostUrl = '/';

  constructor(private httpClient: HttpClient) { }

  getGoogleLogin() {
    return this.httpClient.get<string>( this.hostUrl + 'auth/google');
  }

  getUser() {
    return this.httpClient.get<string>( this.hostUrl + 'displayInfo');
  }

}
