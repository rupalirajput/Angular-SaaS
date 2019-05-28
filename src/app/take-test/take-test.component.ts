import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TakeTestApiService } from '../services/take-test-api.service';
import { ITakeTestModel } from '../share/ITakeTestModel';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  questionBankID: Number;
  testTakerID : Number;
  currentQuestionID: Number;
  let orderOfQuestionInTest = 0;
  category : String;
  options: [String, String, String, String];
  answer: String;
  isCorrect : Number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private test$: TakeTestApiService
  ) {
    this.questionBankID = route.snapshot.params['id'];
    test$.getQuestionBankDetails(this.questionBankID)
    .subscribe(
      result => {
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
