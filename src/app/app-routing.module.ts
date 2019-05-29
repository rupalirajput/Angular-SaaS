import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ReportComponent } from './report/report.component';

import {QuestionComponent} from './question/question.component';
import { TestDetailsComponent } from './test-details/test-details.component';
const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: '', component: AccountComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'report/:userid/reports/:reportNum', component: ReportComponent}

  { path: 'account', component: AccountComponent },
  { path: 'dashboard', component: AccountComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'test/:id', component: TestDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
