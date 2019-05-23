import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IAccountModel from '../share/IAccountModel';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  hostUrl = 'http://localhost:1234/';

 constructor(private httpClient: HttpClient) { }

  getListsIndex() {
    return this.httpClient.get<IAccountModel[]>( this.hostUrl + 'account/');
  }

  getItems(index: string) {
    return this.httpClient.get<IAccountModel[]>( this.hostUrl + 'account/' + index + '.json');
  }
}
