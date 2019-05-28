import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TakeTestService } from '../services/take-test-api.service';
import ITakeTestModel from '../share/ITakeTestModel';

// Allows access to definition of QuestionBankDetails
import QuestionBankDetails from '../share/QuestionBankDetails';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  tests: ITakeTestModel[];
  questionBankDetails:QuestionBankDetails;
  questionBankID: String;
  questionBankName: String;
  createdDate: Date;
  lastmodifiedDate: Date;
  createdBy: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private test$: TakeTestService
  ) {
    this.questionBankID = route.snapshot.params['id'];
    test$.getQuestionBankDetails(this.questionBankID)
    .subscribe(
      result => {
        this.questionBankName = result[0].quesBankName;
      },
      () => {},
      () => {}
    );
  }


  ngOnInit() {
  }

}
