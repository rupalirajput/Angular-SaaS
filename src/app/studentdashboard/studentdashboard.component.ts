import {Component, OnInit} from '@angular/core';
import {questionBankService} from '../services/ques-bank.service';
import {TestDetailsApiService} from '../services/test-details-api.service';
import IquestionBankModel from '../share/IQuestionBankModel';
import ITestDetailsModel from '../share/ITestDetailsModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  questionBanks: IquestionBankModel[];
  userID: String;

  constructor(private questionBank$: questionBankService, private router: Router, private route: ActivatedRoute) {
    questionBank$.getListsIndex().subscribe((result: IquestionBankModel[]) => {
      this.questionBanks = result;
    });
  }

  ngOnInit() {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user_role', 'student');
    this.userID = localStorage.getItem('user_id');
  }
}
