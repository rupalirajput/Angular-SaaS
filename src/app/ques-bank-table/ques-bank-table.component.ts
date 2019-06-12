import { Component, OnInit } from '@angular/core';
import {questionBankService} from '../services/ques-bank.service';
import IquestionBankModel from '../share/IQuestionBankModel';
import IQuestionModel from '../share/IQuestionModel';
import {Router} from '@angular/router';
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

  constructor(private questionBank$: questionBankService, private router: Router) {
    questionBank$.getListsIndex().subscribe((result: IquestionBankModel[]) => {
    this.questionBanks = result;
  });
}

  public loadQuestionBanks()
  {
      this.questionBank$.getListsIndex().subscribe((result: IquestionBankModel[]) => {
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
        this.loadQuestionBanks();
        console.log('Updated Successfully');
    },
      error =>
      {
        console.log(error);
      }
    );
    this.updateSuccessful();
  }

  public deleteQuestionBank(questionBankID)
  {
    this.questionBank$.deleteQuestionBankService(questionBankID).subscribe(
      success =>{
        this.loadQuestionBanks();
        console.log('Deleted Successfully');
    },
      error =>
      {
        console.log(error);
      }

    )
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
    if (localStorage.getItem('user_role') != null) {
      switch (localStorage.getItem('user_role') ) {
        case 'professor':
          this.router.navigate(['/professor_dashboard/']);
          break;
        case 'student':
          this.router.navigate(['/student_dashboard/']);
          break;
      }
    }
  }
}
