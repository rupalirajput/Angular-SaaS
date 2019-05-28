import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountApiService } from './services/account-api.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReportComponent } from './report/report.component';
import { ReportService} from './report.service';
import { ReportClass } from './report-class';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [AccountApiService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
