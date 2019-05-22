import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IAccountModel from '../share/IAccountModel';
import { Http } from '@angular/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  hostUrl = 'assets/';

constructor(private httpClient: HttpClient) { }
// constructor(private http Http) { }

  getListsIndex() {
     // return this.http.get( 'http://localhost:1234/app/account');
     return this.httpClient.get<IAccountModel[]>( this.hostUrl + 'json/accounts.json');
  }

  getItems(index: string) {
    return this.httpClient.get<IAccountModel[]>( this.hostUrl + 'json/account/' + index + '.json');
    // return this.httpClient.get( this.hostUrl + 'json/accounts/' + index + '.json');
  }
}
