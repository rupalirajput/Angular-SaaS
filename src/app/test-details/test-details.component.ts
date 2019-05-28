import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TestDetailsApiService } from '../services/test-details-api.service';
import ITestDetailsModel from '../share/ITestDetailsModel';

// Allows access to definition of QuestionBankDetails
import QuestionBankDetails from '../share/QuestionBankDetails';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  questionBankDetails:QuestionBankDetails;
  questionBankID: String;
  questionBankName: String;
  createdDate: Date;
  lastmodifiedDate: Date;
  createdBy: String;

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
