import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { AccountComponent } from './account/account.component';
import { AccountApiService } from './services/account-api.service';

import { ReportComponent } from './report/report.component';
import { ReportService} from './report.service';
import { ReportClass } from './report-class';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from './question/question.component';
import { QuestionApiService } from './services/question-api.service';

import { TestDetailsComponent } from './test-details/test-details.component';
import { TestDetailsApiService } from './services/test-details-api.service';

import { TakeTestComponent } from './take-test/take-test.component';
import { TakeTestApiService } from './services/take-test-api.service';

import {QuesBankTableComponent} from './ques-bank-table/ques-bank-table.component';
import {QuesBankService} from './services/ques-bank.service';

import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ReportComponent,
    QuestionComponent,
    TestDetailsComponent,
    TakeTestComponent,
    QuesBankTableComponent,
	StudentdashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [AccountApiService, QuestionApiService, TestDetailsApiService,
    TakeTestApiService, ReportService, QuesBankService ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
