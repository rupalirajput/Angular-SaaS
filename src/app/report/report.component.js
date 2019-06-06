"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Chart_js_1 = require("src/assets/js/charts/Chart.js");
var ReportComponent = /** @class */ (function () {
    // list: ReportService;
    function ReportComponent(route, list) {
        this.route = route;
        this.list = list;
        this.chart = [];
        this.testArray = [];
    }
    ReportComponent.prototype.makeChart = function () {
        var ctx = document.getElementById('barchart1');
        var barchart1 = new Chart_js_1.Chart(ctx, {
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
                legend: { display: false },
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
    };
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
    ReportComponent.prototype.ngOnInit = function () {
        this.userid = this.route.snapshot.params['testTakerID'];
        this.questionBankID = this.route.snapshot.params.questionBankID;
        this.testid = this.route.snapshot.params.testID;
        this.list.getTestReportDetails(this.userid, this.questionBankID, this.testid).subscribe(function (result) {
            console.log(result);
        }, function (error) {
            console.log('failed to get test details ' + error);
        });
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'app-report',
            templateUrl: './report.component.html',
            styleUrls: ['./report.component.css']
        })
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
