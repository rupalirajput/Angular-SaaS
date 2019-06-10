import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {TakeTestApiService} from '../services/take-test-api.service';
import ITakeTestModel from '../share/ITakeTestModel';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  questionBankID: string;
  questionBankName: string;
  testTakerID = "2";
  currentQuestionID: Number;
  orderOfQuestionInTest: number;
  questionText: string;
  category: string;
  answer: string;
  options:any;
  testID = "101";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private test$: TakeTestApiService
  ) {
    this.questionBankID = route.snapshot.params['questionbankid'];
    console.log(this.questionBankID);
    test$.getFirstQuestion(this.questionBankID)
      .subscribe(
        result => {
          this.questionBankName = result.questionBankName;
          this.currentQuestionID = result.questionID;
          this.orderOfQuestionInTest = 1;
          this.questionText = result.questionText;
          this.category = result.category;
          this.options = result.options;
          this.answer = result.answer;

          var i:any;
          for(i=0; i<4; i++){
            console.log(this.options[i]);
          }
        },
        () => {
        },
        () => {
        },
      );
  }

  // Gets user's choice from available answer options
  // Passes on choice to service
  submitAnswer(form) {
    // (if answer is) correct: 1 == true, 0 == false
    var correct: Number;
    console.log(form.value['answer']);
    var answer = form.value['answer'];
    this.orderOfQuestionInTest++;
    if (answer === this.answer){
      correct = 1;
    } else{
      correct = 0;
    }
    var testData = {
      testID : this.testID,
      testTakerID : this.testTakerID,
      questionBankID : this.questionBankID,
      questionID : this.currentQuestionID,
      orderOfQuestionInTest : this.orderOfQuestionInTest,
      category : this.category,
      isCorrect : correct
    };
    this.test$.submitAnswer(testData, this.questionBankID)
    .subscribe(
      result => {
        this.questionBankName = result.questionBankName;
        this.currentQuestionID = result.questionID;
        this.orderOfQuestionInTest = this.orderOfQuestionInTest + 1;
        this.questionText = result.questionText;
        this.category = result.category;
        this.options = result.options;
        this.answer = result.answer;
      },
      () => {
      },
      () => {
      },
    );
  }

  ngOnInit() {
  }

}
