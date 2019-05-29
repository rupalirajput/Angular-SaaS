import { Component, OnInit } from '@angular/core';
import {QuesBankService} from '../services/ques-bank.service';
import IQuesbankModel from '../share/IQuestionBankModel';

@Component({
  selector: 'app-ques-bank-table',
  templateUrl: './ques-bank-table.component.html',
  styleUrls: ['./ques-bank-table.component.css']
})
export class QuesBankTableComponent implements OnInit {
  quesBanks: IQuesbankModel[];

  constructor(private quesBank$: QuesBankService) {
    quesBank$.getListsIndex().subscribe((result: IQuesbankModel[]) => {
    this.quesBanks = result;
  });
}
  ngOnInit() {
  }

}
