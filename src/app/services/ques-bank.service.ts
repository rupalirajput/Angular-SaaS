import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IQuestionBankModel from '../share/IQuestionBankModel';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class questionBankService {

  hostUrl = 'http://localhost:1234/';
  //hostUrl = '/';

  constructor(private httpClient: HttpClient) { }

  getListsIndex() {
    return this.httpClient.get<IQuestionBankModel[]>( this.hostUrl + 'questionBanks/');
  }

  getItems(index: number ) {
    return this.httpClient.get<IQuestionBankModel[]>( this.hostUrl + 'questionBanks/' + index);
  }

  addQuestionBankService(questionBank) {
    return this.httpClient.post(this.hostUrl + 'questionBanks/',  JSON.stringify(questionBank), httpOptions);
  }

  updateQuestionBankService(questionBank,questionBankID) {
    return this.httpClient.put(this.hostUrl + 'questionBanks/' + questionBankID,  JSON.stringify(questionBank), httpOptions);
  }

  deleteQuestionBankService(questionBankID){
    return this.httpClient.delete(this.hostUrl + 'questionBanks/' + questionBankID);
  }
}

