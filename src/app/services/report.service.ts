import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import IReportModel from '../share/IReportModel';
import ITestAnswersModel from '../share/ITestAnswersModel';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  // hostUrl = 'http://localhost:1234/';
  hostUrl = '/';

  constructor(private http: HttpClient) { }

  getReports(userid: string) {
    return this.http.get<IReportModel[]>( this.hostUrl + 'report/' + userid + '/reports/');
  }

  getSingleReport(userid: number, questionBankID: number) {
    return this.http.get<IReportModel[]>( this.hostUrl + 'report/' + userid + '/reports/' + questionBankID);
  }

  getTestReportDetails(testTakerID: number, questionBankID: number) {
      return this.http.get<ITestAnswersModel[]>(this.hostUrl + 'report/' + testTakerID +
      '/reports/' + questionBankID);
    }

}
