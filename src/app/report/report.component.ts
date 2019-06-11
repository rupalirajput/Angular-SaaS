import {Component, OnInit} from '@angular/core';
import {Chart} from 'src/assets/js/charts/Chart.js';
import ITestAnswersModel from '../share/ITestAnswersModel';
import IQuestionBankModel from '../share/IQuestionBankModel';
import IReportModel from '../share/IReportModel';
import {ReportService} from '../services/report.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ReportClass} from '../report-class';
import {ElementRef, ViewChild} from '@angular/core';
import { questionBankService } from '../services/ques-bank.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  testTakerID: number;
  questionBankID: number;
  testid: number;
  score: string;
  strengths: string[];
  weaknesses: string[];
  categories: string[];
  scores: number[];
  title: String;
  arrayLength: number;
  categoryMap = new Map();
  

  //grab path variables
  constructor(private route: ActivatedRoute,
              private list: ReportService,
              private qBankService: questionBankService) {
    this.testTakerID = this.route.snapshot.params.testTakerID;
    this.questionBankID = this.route.snapshot.params['questionBankID'];
  }

  makeChart() {
    const ctx = document.getElementById('barchart1');
    const barchart1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.categories,
        datasets: [{
          label: '',
          data: this.scores,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgb(50,205,50, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              autoSkip: false
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }
    });
  }

  getTestTitle(){
    this.qBankService.getItems(this.questionBankID).subscribe((result:IQuestionBankModel[])=> {
    this.title = result[0].keyConcepts;
    })
  }

  findStrengthsAndWeaknesses(keys, values, mapSize){
    var min = 0;
    var max = 0;
    
    for (var i = 0; i < mapSize; i++){
      this.categories[i] = keys.next().value;
      this.scores[i] = values.next().value;
      if (this.scores[i] < this.scores[min]){
        min = i;
      }
      if (this.scores[i] > this.scores[max]){
        max = i;
      }
    }
    var strengthCounter = 0;
    var weaknessCounter = 0; 
    this.strengths = new Array();
    this.weaknesses = new Array();
    
    for (var i = 0; i < mapSize; i++){
      if (this.scores[i] == this.scores[min])
        this.weaknesses[weaknessCounter++] = this.categories[i];
    }
    for (var i = 0; i < mapSize; i++){
      if (this.scores[i] == this.scores[max])
        this.strengths[strengthCounter++] = this.categories[i];
    }
    
    //this.strengths = this.categories[max];
    //this.weaknesses = this.categories[min];
  }

  mapScoresAndCategories(result:ITestAnswersModel[]){
    this.arrayLength = result.length;
    var totalCorrect = 0;    
    var holdNumForIncreasingMapCount = 0;
    //loops through return object and puts scores and keywords into map
    var category;
    for (var i = 0; i < this.arrayLength; i++){
      if (result[i].isCorrect == 1) 
        totalCorrect++;
      category = result[i].category;
      if (this.categoryMap.has(category)){
        if (result[i].isCorrect == 1){
          holdNumForIncreasingMapCount = this.categoryMap.get(category);
          holdNumForIncreasingMapCount++;
          this.categoryMap.set(category, holdNumForIncreasingMapCount);
        }
      }
      else {
        if (result[i].isCorrect == 1)
          this.categoryMap.set(category, 1);
        else
          this.categoryMap.set(category, 0);
      }
    }
    return totalCorrect;
  }

  updateTotalScore(totalCorrect){
    var percentageCorrect = (totalCorrect / this.arrayLength) * 100;
    this.score = percentageCorrect.toFixed(2);
  }

  ngOnInit() {
    
    this.getTestTitle();
    
    this.list.getTestReportDetails(this.testTakerID, this.questionBankID).subscribe((result:ITestAnswersModel[]) => {
        
      var totalCorrect = this.mapScoresAndCategories(result);
        
      //puts map categories and scores into arrays for chart
      var keys = this.categoryMap.keys();
      var values = this.categoryMap.values();
      var mapSize = this.categoryMap.size;
      this.scores = new Array(mapSize);
      this.categories = new Array(mapSize);

      this.findStrengthsAndWeaknesses(keys, values, mapSize);
      this.updateTotalScore(totalCorrect);
      this.makeChart();
    },
    error => {
      console.log('failed to get test details ' + error);
    });
  }
}

  // For old reports

  //reportid: number;
  //userid: number;

  /*ngOnInit() {
    this.userid = this.route.snapshot.params['userid'];
    this.questionBankID = this.route.snapshot.params.questionBankID;
    console.log('id: ' + this.route.snapshot.params['questionBankID']);
    console.log('userid: ' + this.route.snapshot.params['userid']);
    this.list.getSingleReport(this.userid, this.questionBankID).subscribe((
      result: IReportModel[]) => {
        console.log(result);
        this.reportid = result[0].reportid;
        this.userid = result[0].userid;
        this.questionBankID = result[0].questionBankID;
        this.score = result[0].score;
        this.strengths = result[0].strengths;
        this.weaknesses = result[0].weaknesses;
        this.categories = result[0].categories;
        this.scores = result[0].scores;
        console.log(this.scores);
        this.title = result[0].title;
        this.makeChart();

      },
      error => {
        console.log('Failed to load questions. ' + error);
      });
  }*/