import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IQuestionBankModel from '../share/IQuestionBankModel';

@Injectable({
  providedIn: 'root'
})
export class questionBankService {
  hostUrl = 'http://localhost:1234/';
  constructor(private httpClient: HttpClient) { }

  getListsIndex() {
    return this.httpClient.get<IQuestionBankModel[]>( this.hostUrl + 'questionBanks/');
  }

  getItems(index: string) {
    return this.httpClient.get<IQuestionBankModel[]>( this.hostUrl + 'questionBanks/' + index + '.json');
  }
}
