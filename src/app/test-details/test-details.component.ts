import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TestDetailsApiService } from '../services/test-details-api.service';
import ITestDetailsModel from '../share/ITestDetailsModel';


@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  questionBankID: String;
  questionBankName: String;
  duration: Number;
  numberOfQuestions: Number;
  keyConcepts: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private test$: TestDetailsApiService
  ) {
    this.questionBankID = route.snapshot.params['id'];
    test$.getQuestionBankDetails(this.questionBankID)
    .subscribe(
      result => {
        this.questionBankName = result[0].questionBankName;
      },
      () => {},
      () => {}
    );
  }


  ngOnInit() {
  }

}
