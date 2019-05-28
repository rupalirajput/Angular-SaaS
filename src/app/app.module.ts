import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { AccountComponent } from './account/account.component';
import { AccountApiService } from './services/account-api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from './question/question.component';
import { QuestionApiService } from './services/question-api.service';
import { EditQuestionComponent } from './edit-question/edit-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    QuestionComponent,
    EditQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [AccountApiService, QuestionApiService],
  bootstrap: [AppComponent],
  entryComponents: [ EditQuestionComponent ]
})
export class AppModule { }
