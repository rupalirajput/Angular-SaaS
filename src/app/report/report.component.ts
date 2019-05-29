import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/assets/js/charts/Chart.js';
import IReportModel from '../share/IReportModel';
import { ReportService } from '../report.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ReportClass} from '../report-class';
import { ElementRef, ViewChild } from '@angular/core';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  reportid: Number;
  userid: Number;
  questionBankID: Number;
  score: Number;
  strengths: String;
  weaknesses: String;
  categories: [];
  scores: [];
  title: String;
  
  reportNum: string;
  chart = [];

  //list: ReportService;
  
  constructor(private route: ActivatedRoute,
    private list: ReportService) { 
        this.userid = route.snapshot.params['userid'];
        this.reportNum = route.snapshot.params['reportNum'];       
  }
  makeChart(){
    var ctx = document.getElementById("barchart1");
    var barchart1 = new Chart(ctx, {
    type: 'bar',
      data: {
        labels: this.categories,
        datasets: [{
          label: "",
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
      options: { legend:{display: false},
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
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
  ngOnInit() {
        this.list.getSingleReport(this.userid, this.reportNum).subscribe((
          result: IReportModel[]) => {
            this.reportid = result[0].reportid;
            this.userid = result[0].userid;
            this.questionBankID = result[0].questionBankID;
            this.score = result[0].score;
            this.strengths = result[0].strengths;
            this.weaknesses = result[0].weaknesses;
            this.categories = result[0].categories;
            this.scores = result[0].scores;
            this.title = result[0].title;
            this.makeChart();
          });
    }
}

