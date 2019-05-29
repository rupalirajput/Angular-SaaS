import { Component, OnInit, ViewChild, Input, Output} from '@angular/core';
import { QuestionApiService } from '../services/question-api.service';
import IQuestionModel from '../share/IQuestionModel';
import { ModalDirective } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';

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
  public questionDetails: IQuestionModel[];
  selectedQuestionLoaded = false;
  newQuestionLoaded = false;
  animation = true;
  public newQuestion: IQuestionModel;

  constructor(
    private question$: QuestionApiService
    ) { }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.question$.getQuestions().subscribe((result: IQuestionModel[]) => {
      this.questions = result;
    }, error => {
      console.log('Failed to load questions. ' + error);
    });
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
        console.log(result);
        this.loadQuestions();
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
