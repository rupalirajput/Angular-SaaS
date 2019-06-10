import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ITakeTestModel from '../share/ITakeTestModel';
import IQuestionsModel from '../share/IQuestionModel';

@Injectable({
  providedIn: 'root'
})
export class TakeTestApiService {

  hostUrl = 'http://localhost:1234/';

  //hostUrl = '/';

  constructor(private httpClient: HttpClient) { }

  getFirstQuestion(questionBankID: string)
  {
    return this.httpClient.get<IQuestionsModel>(this.hostUrl + 'test/' + questionBankID);
  }

  getNextQuestion(questionBankID: string, orderOfQuestionInTest: Number, testID: string){
    return this.httpClient.get<IQuestionsModel>(this.hostUrl + 'test/' + questionBankID + '/' + orderOfQuestionInTest + '/' + testID);

  }

  submitAnswer(testData: any, questionBankID: String){
    return this.httpClient.post<IQuestionsModel>(this.hostUrl + 'test/' + questionBankID, testData);
  }
}
