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
  questionBankID: String;
  questionBankName: String;
  testTakerID: Number;
  currentQuestionID: Number;
  orderOfQuestionInTest: Number;
  questionText: String;
  category: String;
  option1: String;
  option2: String;
  option3: String;
  option4: String;
  answer: String;
  isCorrect: Number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private test$: TakeTestApiService
  ) {
  this.questionBankID = route.snapshot.params['questionbankid'];    console.log(this.questionBankID);
    test$.getFirstQuestion(this.questionBankID)
    .subscribe(
      result => {
        this.questionBankName = result.questionBankName;
        this.currentQuestionID = result.questionID;
        this.orderOfQuestionInTest = 1;
        this.questionText = result.questionText;
        this.category = result.category;
        this.option1 = result.options[0];
        this.option2 = result.options[1];
        this.option3 = result.options[2];
        this.option4 = result.options[3];
        this.answer = result.answer;
      },
      () => {},
      () => {},
    );
  }

  ngOnInit() {
  }

}
