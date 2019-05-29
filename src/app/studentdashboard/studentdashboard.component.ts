import { Component, OnInit } from '@angular/core';
import {questionBankService} from '../services/ques-bank.service';
import IquestionBankModel from '../share/IQuestionBankModel';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  questionBanks: IquestionBankModel[];

  constructor(private questionBank$: questionBankService) {
    questionBank$.getListsIndex().subscribe((result: IquestionBankModel[]) => {
    this.questionBanks = result;
  });
}

  ngOnInit() {
  }

}
