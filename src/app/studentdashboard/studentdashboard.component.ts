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

  constructor(private questionBank$: questionBankService, private router: Router, private route: ActivatedRoute) {
    questionBank$.getListsIndex().subscribe((result: IquestionBankModel[]) => {
      this.questionBanks = result;
    });
  }

  ngOnInit() {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user_role', 'student');
    localStorage.setItem('user_id', this.route.snapshot.params.user.split('?')[0]);
    localStorage.setItem('user_name', this.route.snapshot.params.user.split('?')[1]);
  }
}
