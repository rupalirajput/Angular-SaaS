var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Check test Object', function() {

    var requestResult;
    var response;

    before(function (done){
        chai.request("http://localhost:1234")
            .get("/test/101")
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
        expect(response).to.have.headers;
        expect(response).to.be.json;
    })
    it('The Oject has known properties', function(){
        expect(requestResult).to.include.keys('questionBankID');
        expect(requestResult).to.have.property('questionBankName');
        expect(requestResult).to.have.property('questionID');
        expect(requestResult).to.have.property('questionText');
        expect(requestResult).to.have.property('category');
        expect(requestResult).to.have.property('options');
        expect(requestResult).to.have.property('answer');
    
    
    });

    
    

});