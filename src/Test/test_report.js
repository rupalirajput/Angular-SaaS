var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Check Report Object', function() {

    var requestResult;
    var response;

    before(function (done){
        chai.request("http://localhost:1234")
            .get("/report/1/reports/101")
            .end(function (err,res){
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Should return one JSON object', function(){
        expect(response).to.have.status(200);
        expect(response.body).to.have.length(1);
        expect(response).to.have.headers;
        expect(response).to.be.json;
    })
    it('The Oject has known properties', function(){
        expect(requestResult[0]).to.include.keys('reportid');
        expect(requestResult[0]).to.have.property('userid');
        expect(requestResult[0]).to.have.property('questionBankID');
        expect(requestResult[0]).to.have.property('score');
        expect(requestResult[0]).to.have.property('strengths');
        expect(requestResult[0]).to.have.property('weaknesses');
        expect(requestResult[0]).to.have.property('categories');
        expect(requestResult[0]).to.have.property('scores');
        expect(requestResult[0]).to.have.property('title');
    });


});
