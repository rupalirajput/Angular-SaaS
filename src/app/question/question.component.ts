import { Component, OnInit, ViewChild, Input, Output} from '@angular/core';
import { QuestionApiService } from '../services/question-api.service';
import IQuestionModel from '../share/IQuestionModel';
import { ModalDirective } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import IquestionBankModel from '../share/IQuestionBankModel';
import {questionBankService} from '../services/ques-bank.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('childModal') public childModal: ModalDirective;
  @ViewChild('childNewQuestionModal') public childNewQuestionModal: ModalDirective;
  @ViewChild('modal')
  @ViewChild('childNewQuestionModal')
  public questions: IQuestionModel[];
  selectedQuestionId: number;
  selectedQuestionBankId: number;
  public questionDetails: IQuestionModel[];
  public questionBanks: IquestionBankModel[];

  selectedQuestionLoaded = false;
  selectedQuestionBankLoaded = false;
  newQuestionLoaded = false;
  animation = true;
  public newQuestion: IQuestionModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private question$: QuestionApiService,
    private questionBank$: questionBankService
    ) { }

  ngOnInit() {
    this.selectedQuestionBankId = this.route.snapshot.params.questionBankID;
    if (this.selectedQuestionBankId !== 0) {
      this.EditQuestionBank(this.selectedQuestionBankId);
      this.loadQuestions(this.selectedQuestionBankId);
    } else {
      this.EditQuestionBank(0);
      this.loadQuestions(0);
    }
  }

  loadQuestions(questionBankID: number) {
    if (questionBankID !== 0) {
      this.selectedQuestionBankId = questionBankID;
      this.question$.getQuestionsByBankID(this.selectedQuestionBankId).subscribe((result: IQuestionModel[]) => {
        this.questions = result;
      }, error => {
        console.log('Failed to load questions. ' + error);
      });
    }
  }

  EditQuestionBank(questionBankID: number) {
    if (questionBankID !== 0) {
      this.selectedQuestionBankId = questionBankID;
      this.questionBank$.getItems(this.selectedQuestionBankId).subscribe((result: IquestionBankModel[]) => {
          this.selectedQuestionBankLoaded = true;
          this.questionBanks = result;
          console.log(this.questionBanks);
        },
        error => {
          console.log('Failed to load questions bank. ' + error);
        });
    }
  }

  showNewQuestion() {
    this.newQuestionLoaded = true;
    this.childNewQuestionModal.show();
  }

  editQuestionDetails(questionID: number) {
    this.selectedQuestionId = questionID;
    this.question$.getQuestionsIndex(this.selectedQuestionId).subscribe((result: IQuestionModel[]) => {
          this.questionDetails = result;
          this.selectedQuestionLoaded = true;
          this.childModal.show();
          console.log(this.questionDetails[0]);
        },
        error => {
          console.log('Failed to load questions. ' + error);
        });
  }

  addQuestion(childNewQuestionModal: NgForm, questionBankID: number) {
    console.log(childNewQuestionModal.value);
    this.question$.addQuestion(this.newQuestion, questionBankID).subscribe((result: IQuestionModel[]) => {
       console.log(result);
      },
      error => {
        console.log('Failed to load questions. ' + error);
      });
  }

  deleteQuestion(questionID: number) {
    this.selectedQuestionId = questionID;
    this.question$.deleteQuestion(this.selectedQuestionId).subscribe((result: IQuestionModel[]) => {
        this.loadQuestions(this.selectedQuestionBankId);
      },
      error => {
        console.log('Failed to delete an question. ' + error);
      });
  }

  public hideChildNewQuestionModal(): void {
    this.childNewQuestionModal.hide();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

}
