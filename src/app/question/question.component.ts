import { Component, OnInit, ViewChild, Input, Output} from '@angular/core';
import { QuestionApiService } from '../services/question-api.service';
import IQuestionModel from '../share/IQuestionModel';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('childModal') public childModal: ModalDirective;
  public questions: IQuestionModel[];
  @ViewChild('modal')
  selectedQuestionId: number;
  public questionDetails: IQuestionModel[];
  selectedQuestionLoaded = false;
  animation = true;

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

  editQuestionDetails(questionID: number) {
    this.selectedQuestionId = questionID;
    this.question$.getQuestionsIndex(this.selectedQuestionId).subscribe((result: IQuestionModel[]) => {
          this.questionDetails = result;
          this.selectedQuestionLoaded = true;
          this.childModal.show();
          console.log(this.questionDetails[0].questionID);
        },
        error => {
          console.log('Failed to load questions. ' + error);
        });
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

}
