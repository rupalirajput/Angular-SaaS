import {Component, OnInit, ViewChild, Input, Output} from '@angular/core';
import {QuestionApiService} from '../services/question-api.service';
import IQuestionModel from '../share/IQuestionModel';
import {ModalDirective} from 'ngx-bootstrap';
import {NgForm} from '@angular/forms';
import IquestionBankModel from '../share/IQuestionBankModel';
import {questionBankService} from '../services/ques-bank.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import IQuestionBankModel from '../share/IQuestionBankModel';
import {jsonpCallbackContext} from '@angular/common/http/src/module';
import {post} from 'selenium-webdriver/http';
import {error} from '@angular/compiler/src/util';

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
  OptionSelected: string;
  public newQuestion: IQuestionModel;
  public newQuestionBank: IQuestionBankModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private question$: QuestionApiService,
    private questionBank$: questionBankService
  ) {
  }

  ngOnInit() {
    this.selectedQuestionBankId = this.route.snapshot.params.questionBankID;
    if (this.selectedQuestionBankId == 0) {
      this.selectedQuestionBankLoaded = false;
      this.EditQuestionBank(0);
      this.loadQuestions(0);
    } else {
      this.selectedQuestionBankLoaded = true;
      this.EditQuestionBank(this.selectedQuestionBankId);
      this.loadQuestions(this.selectedQuestionBankId);
    }
  }

  loadQuestions(questionBankID: number) {
    if (questionBankID == 0) {
      console.log('Failed to load questions. ');
    } else {
      this.selectedQuestionBankId = questionBankID;
      this.question$.getQuestionsByBankID(this.selectedQuestionBankId).subscribe((result: IQuestionModel[]) => {
        this.questions = result;
      }, error => {
        console.log('Failed to load questions. ' + error);
      });
    }
  }

  EditQuestionBank(questionBankID: number) {
    if (questionBankID == 0) {
      console.log('Failed to load questions bank. ');
    } else {
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

  updateQuestionBank(questionBankName, duration, numberofQuestion) {
    let QuestionBankId = this.route.snapshot.params.questionBankID;
    let requestbody = {
      questionBankName: questionBankName,
      duration: duration,
      numberofQuestions: numberofQuestion,
      createdDate: new Date(),
      lastmodifiedDate: new Date(),
      keyConcepts: questionBankName
    };

    this.questionBank$.updateQuestionBankService(requestbody, QuestionBankId).subscribe(
      success => {
        console.log('Updated Successfully');
      }
    );
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

  addQuestion(question, category, option1, option2, option3, option4, OptionSelected) {
    // console.log(childNewQuestionModal.value);
    /* this.question$.addQuestion(this.newQuestion, questionBankID).subscribe((result: IQuestionModel[]) => {
       console.log(result);
      },
      error => {
        console.log('Failed to load questions. ' + error);
      }); */
    let questionBankID = this.route.snapshot.params.questionBankID;
    let questionBody = {
      questionBankID,
      questionBankName: 'Maths',
      questionText: question,
      category,
      options: [option1, option2, option3, option4],
      answer: OptionSelected
    };

    // console.log(questionBankID,question,category,option1,option2,option3,option4);
    console.log(OptionSelected);
    console.log(questionBankID);
    console.log(JSON.stringify(questionBody));
    this.question$.addQuestion(questionBody, questionBankID).subscribe(
      success => {
        console.log('Updated Successfully');
      }
    );
    this.updateSuccessful();
  }

  updateQuestion(questionID, question, category, option1, option2, option3, option4, OptionSelected) {
    // console.log(childNewQuestionModal.value);
    /* this.question$.addQuestion(this.newQuestion, questionBankID).subscribe((result: IQuestionModel[]) => {
       console.log(result);
      },
      error => {
        console.log('Failed to load questions. ' + error);
      }); */
    let questionBankID = this.route.snapshot.params.questionBankID;
    let questionBody = {
      questionText: question,
      category,
      options: [option1, option2, option3, option4],
      answer: OptionSelected
    };

    // console.log(questionBankID,question,category,option1,option2,option3,option4);
    console.log(OptionSelected);
    console.log(questionID);
    console.log(JSON.stringify(questionBody));
    this.question$.updateQuestion(questionBody, questionID).subscribe(
      success => {
        console.log('Updated Successfully');
      }
    );
    this.updateSuccessful();
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

  public addQuestionBank(questionBankName, duration, numberofQuestions) {
    let requestbody = {
      questionBankName,
      duration,
      numberofQuestions,
      createdDate: new Date(),
      lastmodifiedDate: new Date(),
      createdBy: 'Prof. Hanks',
      updatedBy: 'Prof. Hanks',
      status: 'Draft',
      keyConcepts: questionBankName
    };
    /*  this.newQuestionBank.questionBankName = questionBankName;
     this.newQuestionBank.numberOfQuestions = numberofQuestion;
     this.newQuestionBank.duration = duration;
     console.log(JSON.stringify(this.newQuestionBank)); */
    console.log(JSON.stringify(requestbody));
    console.log(requestbody);
    this.questionBank$.addQuestionBankService(requestbody).subscribe(
      success => {
        console.log('Updated Successfully');
      }
    );
    this.updateSuccessful();
  }

  public updateSuccessful() {
    if (confirm('Question Bank Created Successfully !!')) {
      window.location.reload();
    } else {
      close();
    }
  }


}
