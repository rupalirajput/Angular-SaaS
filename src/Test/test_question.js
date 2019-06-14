var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Question result', function () {

  var requestResult;
  var response;

  before(function (done) {
    chai.request("expressquizapp.azurewebsites.net/")
      .get("questions/")
      .send(user)
      .end(function (err, res) {
        requestResult = res.body;
        response = res;
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should return an array object with more than 1 object', function () {
    expect(response).to.have.status(200);
    expect(response.body).to.have.length.above(1);
    expect(response).to.be.an('object');
    expect(response).to.have.headers;
  });

  it('The first entry in the array has known properties', function () {
    expect(requestResult[0]).to.include.keys('questionText');
    expect(requestResult[0]).to.have.property('_id');
    expect(response.body[0]).to.have.deep.property('questionText');
    expect(response.body).to.not.be.a.string;
    expect(requestResult[0]).to.have.property('answer');
  });
  // it('The elements in the array have the expect properties', function () {
  //   expect(response.body).to.satisfy(
  //     function (body) {
  //       for (var i = 0; i < body.length; i++) {
  //         expect(body[i]).to.have.property('questionText');
  //         expect(body[i]).to.have.property('category');
  //         expect(body[i]).to.have.property('options').that.is.a('array');
  //         expect(body[i]).to.have.property('answer');//.that.is.a('string');
  //       }
  //       return true;
  //     });
  // });

});
