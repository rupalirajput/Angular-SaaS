import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import {QuestionComponent} from './question/question.component';
import { TakeTestComponent } from './take-test/take-test.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'dashboard', component: AccountComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'test/:id', component: TakeTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
