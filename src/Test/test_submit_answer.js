var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Check post method when submitting test answers', function() {

    var response;

   before (function (done){
       chai.request("expressquizapp.azurewebsites.net/#/")
           .post("test/101")
           .send({
                testID: 1,
                testTakerID: 1,
                questionBankID: 105,
                questionID: 1,
                orderofQuestionInTest: 1,
                category: 'Thermochemistry',
                isCorrect: 1})
            .end(function (err,res){
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            done();
           });
    });

    it('Should return one JSON object', function(){
        expect(response).to.have.status(200);
        expect(response).to.have.headers;
        expect(response).to.be.json;
    });

    it('The returned Object should have known properties', function(){
        expect(response.body).to.have.property('testID');
        expect(response.body).to.have.property('testTakerID');
        expect(response.body).to.have.property('questionBankID');
        expect(response.body).to.have.property('questionID');
        expect(response.body).to.have.property('orderofQuestionInTest');
        expect(response.body).to.have.property('category');
        expect(response.body).to.have.property('isCorrect');
    });

  


});

