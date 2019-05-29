import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ITakeTestModel from '../share/ITakeTestModel';
import IQuestionModel from '../share/IQuestionModel';

@Injectable({
  providedIn: 'root'
})
export class TakeTestApiService {

  hostUrl = 'http://localhost:1234/';

  constructor(private httpClient: HttpClient) { }

  getFirstQuestion(questionBankID: String)
  {
    return this.httpClient.get<IQuestionModel[]>(this.hostUrl + 'test/' + questionBankID )
  }
}
