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

  getQuestionsIndex(index: string) {
    return this.httpClient.get<IQuestionModel>( this.hostUrl + 'app/questions/' + index);
  }
}
