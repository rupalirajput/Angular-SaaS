"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        this.hostUrl = 'http://localhost:1234/';
    }
    ReportService.prototype.getReports = function (userid) {
        return this.http.get(this.hostUrl + 'report/' + userid + '/reports/');
    };
    ReportService.prototype.getSingleReport = function (userid, questionBankID) {
        return this.http.get(this.hostUrl + 'report/' + userid + '/reports/' + questionBankID);
    };
    ReportService.prototype.getTestReportDetails = function (testTakerID, questionBankID, testID) {
        return this.http.get(this.hostUrl + 'report/' + testTakerID +
            '/reports/' + questionBankID + 'testID' + testID);
    };
    ReportService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ReportService);
    return ReportService;
}());
exports.ReportService = ReportService;
