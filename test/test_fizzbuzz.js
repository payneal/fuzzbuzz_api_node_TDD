const chai = require('chai');
const expect = chai.expect;
const FizzBuzz = require('../src/fizzbuzz');

var fizzBuzz  = new FizzBuzz(); 

describe("testing fizzbuzz functionality", function() {
    
    it("should throw error if word is not fizz, buzz, or fizzbuzz", function() {
        var answer = fizzBuzz.get_array_of_numbers("ali", 30);
        expect(answer).to.be.equal("error");
    });

    it("should throw error if word is not fizz, buzz, or fizzbuzz", function() {
        var answer = fizzBuzz.get_array_of_numbers("fizz", 0);
        expect(answer).to.be.equal("error");
    });

    it(" fizz and 2 should throw error", function() {
        var answer = fizzBuzz.get_array_of_numbers("fizz", 2);
        expect(answer).to.be.equal("error");
    });
    
    it(" fizz and 3 should return [3]", function() {
        var answer = fizzBuzz.get_array_of_numbers("fizz", 3);
        expect(answer).to.be.eql([3]);
    });
    
    it("fizz and 5 should return [3]", function() {
        var answer = fizzBuzz.get_array_of_numbers("fizz", 3);
        expect(answer).to.be.eql([3]);
    });

    it("buzz and 3 should return error", function() {
        var answer = fizzBuzz.get_array_of_numbers("buzz", 3);
        expect(answer).to.be.eql("error");
    });

    it("buzz and 5 should return [5]", function() {
        var answer = fizzBuzz.get_array_of_numbers("buzz", 5);
        expect(answer).to.be.eql([5]);
    });

    it("fizzbuzz and 5 should return [3,5]", function() {
        var answer = fizzBuzz.get_array_of_numbers("fizzbuzz", 5);
        expect(answer).to.be.eql([3,5]);
    });

    it("fizz and 30 should return[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]", function() {
        var answer = fizzBuzz.get_array_of_numbers("fizz", 30);
        expect(answer).to.be.eql([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    });
});
