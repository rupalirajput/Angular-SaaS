import { Component, OnInit } from '@angular/core';
import {questionBankService} from '../services/ques-bank.service';
import {TestDetailsApiService} from '../services/test-details-api.service';
import IquestionBankModel from '../share/IQuestionBankModel';
import ITestDetailsModel from '../share/ITestDetailsModel';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  questionBanks: IquestionBankModel[];

  constructor(private testDetail$: TestDetailsApiService) {
    testDetail$.getListsIndex().subscribe((result: IquestionBankModel[]) => {
    this.questionBanks = result;
  });
}

  ngOnInit() {
  }

}
