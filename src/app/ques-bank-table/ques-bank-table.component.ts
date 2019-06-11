import { Component, OnInit } from '@angular/core';
import {questionBankService} from '../services/ques-bank.service';
import IquestionBankModel from '../share/IQuestionBankModel';
import IQuestionModel from '../share/IQuestionModel';
import { error } from 'util';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

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

  public publishQuestionBank(questionBankID)
  {
    var requesbody ={
      status: 'Published',
    };
    console.log(requesbody);
    this.questionBank$.updateQuestionBankService(requesbody,questionBankID).subscribe(
      success =>{
        console.log('Updated Successfully');
    },
      error =>
      {
        console.log(error);
      }    
    );
    this.updateSuccessful();
  }

  public updateSuccessful()
  {
    if (confirm("Updated Successfully !!")) {
      window.location.reload();
    } else {
      close();
  }
  }
  ngOnInit() {
  }

}
