import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';


import { AccountComponent } from './account/account.component';
import { AccountApiService } from './services/account-api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from './question/question.component';
import { QuestionApiService } from './services/question-api.service';

import { TestDetailsComponent } from './test-details/test-details.component';
import { TestDetailsApiService } from './services/test-details-api.service';

import { TakeTestComponent } from './take-test/take-test.component';
import { TakeTestApiService } from './services/take-test-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    QuestionComponent,
    TestDetailsComponent,
    TakeTestComponent
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
  TakeTestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
