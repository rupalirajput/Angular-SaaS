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
  questionBankID: string;
  questionBankName: string;
  duration: number;
  numberOfQuestions: number;
  keyConcepts: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private test$: TestDetailsApiService
  ) {
    this.questionBankID = route.snapshot.params['id'];
    test$.getQuestionBankDetails(this.questionBankID)
    .subscribe(
      result => {
        console.log(result);
        this.questionBankName = result[0].questionBankName;
        this.duration = result[0].duration;
        this.numberOfQuestions = result[0].numberOfQuestions;
        this.keyConcepts = result[0].keyConcepts;
      },
      () => {},
      () => {}
    );
  }


  ngOnInit() {
  }

}
