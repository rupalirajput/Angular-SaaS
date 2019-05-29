import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IQuestionModel from '../share/IQuestionModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService {

  hostUrl = 'http://localhost:1234/';

  constructor(private httpClient: HttpClient) { }

  getQuestions() {
    return this.httpClient.get<IQuestionModel[]>( this.hostUrl + 'questions/');
  }

  getQuestionsIndex(index: number) {
    return this.httpClient.get<IQuestionModel[]>( this.hostUrl + 'questions/' + index);
  }

  addQuestion(question: IQuestionModel, questionBankID: number) {
    return this.httpClient.post(this.hostUrl + 'questions/bank/' + questionBankID,  JSON.stringify(question));
  }

  updateQuestion(question: IQuestionModel) {
    return this.httpClient.put(this.hostUrl + 'questions/' + question.questionID,  JSON.stringify(question));
  }

  deleteQuestion(questionID: number) {
    return this.httpClient.delete(this.hostUrl + 'questions/' + questionID);
  }

}
