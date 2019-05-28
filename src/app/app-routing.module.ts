import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: '', component: AccountComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'report/:userid/reports/:reportNum', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
