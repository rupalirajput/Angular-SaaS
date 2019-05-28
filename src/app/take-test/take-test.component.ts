import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TakeTestApiService } from '../services/take-test-api.service';
import ITakeTestModel from '../share/ITakeTestModel';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  questionBankID: Number;
  testTakerID: Number;
  currentQuestionID: Number;
  orderOfQuestionInTest: Number;
  questionText: String;
  category: String;
  options: [String, String, String, String];
  answer: String;
  isCorrect: Number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private test$: TakeTestApiService
  ) {
    this.questionBankID = +route.snapshot.params['id'];
    test$.getFirstQuestion(this.questionBankID)
    .subscribe(
      result => {
        this.questionBankID = result[0].questionBankID;
        this.currentQuestionID = result[0].questionID;
        this.orderOfQuestionInTest = 0;
        this.questionText = result[0].questionText;
        this.category = result[0].category;
        this.options = result[0].options;
        this.answer = result[0].answer;
      },
      () => {},
      () => {}
    );
  }

  ngOnInit() {
  }

}
