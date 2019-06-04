import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ITestDetailsModel from '../share/ITestDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class TestDetailsApiService {

  // hostUrl = 'http://localhost:1234/';

  hostUrl = '/';

  constructor(private httpClient: HttpClient) { }

  getQuestionBankDetails(id: string) {
    return this.httpClient.get<ITestDetailsModel[]>(this.hostUrl + 'questionbanks/' + id);
  }
}
