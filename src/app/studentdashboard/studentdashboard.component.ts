import { Component, OnInit } from '@angular/core';
import {QuesBankService} from '../services/ques-bank.service';
import IQuesbankModel from '../share/IQuestionBankModel';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  quesBanks: IQuesbankModel[];

  constructor(private quesBank$: QuesBankService) {
    quesBank$.getListsIndex().subscribe((result: IQuesbankModel[]) => {
    this.quesBanks = result;
  });
}

  ngOnInit() {
  }

}
