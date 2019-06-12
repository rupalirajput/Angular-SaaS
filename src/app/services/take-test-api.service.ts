import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ITakeTestModel from '../share/ITakeTestModel';
import IQuestionsModel from '../share/IQuestionModel';

@Injectable({
  providedIn: 'root'
})
export class TakeTestApiService {

  hostUrl = 'http://localhost:1234/';

  // hostUrl = '/';

  constructor(private httpClient: HttpClient) {
  }


  getFirstQuestion(questionBankID: string){
    return this.httpClient.get<IQuestionsModel>(this.hostUrl + 'test/' + questionBankID);
  }

  getTestID(questionBankID: string, testTakerID: string) {
    return this.httpClient.get<number>(this.hostUrl + 'test/' + questionBankID + '/' + testTakerID);
  }

  getNextQuestion(questionBankID: string, testTakerID: string, testID: number){
    return this.httpClient.get<IQuestionsModel>(this.hostUrl + 'test/' + questionBankID + '/' + testID + '/' + testTakerID);

  }

  submitAnswer(testData: any, questionBankID: string) {
    return this.httpClient.post<IQuestionsModel>(this.hostUrl + 'test/' + questionBankID, testData);
  }
}
