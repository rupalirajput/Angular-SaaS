import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ITestDetailsModel from '../share/ITestDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class TestDetailsApiService {

  hostUrl = 'http://localhost:1234/';

  constructor(private httpClient: HttpClient) { }

  getQuestionBankDetails(id: String)
  {
    return this.httpClient.get<ITestDetailsModel[]>(this.hostUrl + 'test/' + id )
  }
}
