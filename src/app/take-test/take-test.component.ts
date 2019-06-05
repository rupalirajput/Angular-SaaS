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
  testTakerID: number;
  currentQuestionID: number;
  orderOfQuestionInTest: number;
  questionText: string;
  category: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  isCorrect: number;

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
          this.option1 = result.options[0];
          this.option2 = result.options[1];
          this.option3 = result.options[2];
          this.option4 = result.options[3];
          this.answer = result.answer;
        },
        () => {
        },
        () => {
        },
      );
  }

  // Gets user's choice from available answer options
  // Passes on choice to service
  onNext() {
    var val;
    var isCorrect;
    // get list of radio buttons with specified name
    var radios = document.getElementById('questionForm')['radSize'];

    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    if(val != this.answer){
      isCorrect = 0;
    }
    else{
      isCorrect = 1;
    }
    this.test$.submitAnswer(val, isCorrect, this.questionBankID)
      .subscribe(
        result => {
          this.questionBankName = result.questionBankName;
          this.currentQuestionID = result.questionID;
          this.orderOfQuestionInTest = this.orderOfQuestionInTest + 1;
          this.questionText = result.questionText;
          this.category = result.category;
          this.option1 = result.options[0];
          this.option2 = result.options[1];
          this.option3 = result.options[2];
          this.option4 = result.options[3];
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
