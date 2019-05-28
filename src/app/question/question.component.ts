import { Component, OnInit } from '@angular/core';
import { QuestionApiService } from '../services/question-api.service';
import IQuestionModel from '../share/IQuestionModel';
import { EditQuestionComponent } from '../edit-question/edit-question.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questions: IQuestionModel[];
  public sel_question: IQuestionModel;
  display = 'none';

  constructor(public question$: QuestionApiService, public modalService: NgbModal) {
    this.question$.getQuestions().subscribe((result: IQuestionModel[]) => {
      this.questions = result;
      this.sel_question = result[1];
    });
  }
  ngOnInit() {
  }

  onCloseHandled() {
    this.display = 'none';
  }
  openModal(questionID: string) {
    console.log(questionID);
    this.display = 'block';
    this.question$.getQuestionsIndex(questionID).subscribe((result: IQuestionModel) => {
      this.sel_question = result;
    });
    // const modalRef = this.modalService.open(EditQuestionComponent);
    // modalRef.componentInstance.question = question;
    // this.question = question;

  }
}
