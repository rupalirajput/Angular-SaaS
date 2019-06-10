import { Component, OnInit } from '@angular/core';
import {questionBankService} from '../services/ques-bank.service';
import IquestionBankModel from '../share/IQuestionBankModel';
import IQuestionModel from '../share/IQuestionModel';

@Component({
  selector: 'app-ques-bank-table',
  templateUrl: './ques-bank-table.component.html',
  styleUrls: ['./ques-bank-table.component.css']
})
export class questionBankTableComponent implements OnInit {
  questionBanks: IquestionBankModel[];
  selectedQuestionBankId: number;

  constructor(private questionBank$: questionBankService) {
    questionBank$.getListsIndex().subscribe((result: IquestionBankModel[]) => {
    this.questionBanks = result;
  });
}
  ngOnInit() {
  }

}
