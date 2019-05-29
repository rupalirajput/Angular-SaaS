import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import IReportModel from './share/IReportModel';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReports(userid: string) {
    return this.http.get( 'http://localhost:1234/' + userid + 'reports/')
    .pipe(map(response => console.log(response)));
  }

  getSingleReport(userid: Number, reportNum: string) {
    return this.http.get<IReportModel[]>( 'http://localhost:1234/report/' + userid + '/reports/' + reportNum);
    
    
  }

}
/*showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
    });
}*/