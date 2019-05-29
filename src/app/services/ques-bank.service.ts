import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IQuestionBankModel from '../share/IQuestionBankModel';

@Injectable({
  providedIn: 'root'
})
export class QuesBankService {
  hostUrl = 'http://localhost:1234/';
  constructor(private httpClient: HttpClient) { }

  getListsIndex() {
    return this.httpClient.get<IQuestionBankModel[]>( this.hostUrl + 'app/questionBanks/');
  }

  getItems(index: string) {
    return this.httpClient.get<IQuestionBankModel[]>( this.hostUrl + 'app/questionBanks/' + index + '.json');
  }
}
