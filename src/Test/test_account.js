var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Account result', function () {

	var user = {
		email: 'hladera13@gmail.com',
		password: 'K5@8G%43bX!g@%c3%'
	};
	var requestResult;
	var response;

    before(function (done) {
        chai.request("finalquizapp.azurewebsites.net")
			.get("/account")
			.send(user)
			.end(function (err, res) {
				console.log(res);
				//requestResult = res.body;
				//console.log(requestResult);
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });

    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
		expect(response.body).to.have.length.above(1);
		expect(response).to.have.headers;
    });

	it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('username');
	    expect(requestResult[0]).to.have.property('_id');
		expect(response.body[0]).to.have.deep.property('username');
		expect(response.body).to.not.be.a.string;
	});
	it('The elements in the array have the expecte properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('username');
					expect(body[i]).to.have.property('password');
					expect(body[i]).to.have.property('firstName');
					expect(body[i]).to.have.property('lastName');
					expect(body[i]).to.have.property('email').that.is.a('string');
				}
				return true;
			});
	});

});
