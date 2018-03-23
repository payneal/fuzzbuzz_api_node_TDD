var should = require("should");
var request =  require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:8080"
var util = require("util");
const app = require('../index');
var server;
describe('API endpoint /api', function() {  

    beforeEach((done) => {
        server = app.listen(8080);
		done(); 
	});

    it('should error for word that is not fizz, buzz or fizzbuss', function(done) {
        request.get({url: baseUrl+"/api"},
            function(error, res, body) {
				body =  JSON.parse(body);	
                console.log("hey+ " + res.body)
                expect(res.statusCode).to.equal(400);
                expect(body.status).to.equal(
                	"error");
                done();
            })
    });

    it('should return number array', function(done) {
    	request.get({url: baseUrl + "/api?word=fizz&max_value=30"},
			function(error, res, body) {
				body =  JSON.parse(body);	
				expect(res.statusCode).to.equal(200);
                expect(body.status).to.equal(
                    "ok");
                expect(body.numbers).to.eql(
                    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
                done();
            })
    });

 	afterEach(done => {
        server.close(done);
    });
	
});
