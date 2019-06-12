import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import IQuestionModel from '../share/IQuestionModel';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService {

  hostUrl = 'http://localhost:1234/';

  //hostUrl = '/';

  constructor(private httpClient: HttpClient) { }

  getQuestions() {
    return this.httpClient.get<IQuestionModel[]>( this.hostUrl + 'questions/');
  }

  getQuestionsByBankID(questionBankID: number) {
    return this.httpClient.get(this.hostUrl + 'questions/bank/' + questionBankID);
  }

  getQuestionsIndex(index: number) {
    return this.httpClient.get<IQuestionModel[]>( this.hostUrl + 'questions/' + index);
  }

  addQuestion(question, questionBankID: number) {
    return this.httpClient.post(this.hostUrl + 'questions/bank/' + questionBankID,  JSON.stringify(question),httpOptions);
  }

  updateQuestion(question, questionID: number ) {
    return this.httpClient.put(this.hostUrl + 'question/' + questionID,  JSON.stringify(question),httpOptions);
  }

  deleteQuestion(questionID: number) {
    return this.httpClient.delete(this.hostUrl + 'questions/' + questionID);
  }

}
