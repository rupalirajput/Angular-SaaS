import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ITakeTestModel from '../share/ITakeTestModel';
import QuestionBankDetails from '../share/QuestionBankDetails';

@Injectable({
  providedIn: 'root'
})
export class TakeTestService {

  hostUrl = 'http://localhost:1234/';

  constructor(private httpClient: HttpClient) { }

  getQuestionBankDetails(id: String)
  {
    return this.httpClient.get<QuestionBankDetails[]>(this.hostUrl + 'questionBanks/' + id )
  }
}
