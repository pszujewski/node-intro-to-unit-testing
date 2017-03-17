// Be sure to test the normal case on a range of representative inputs, and test for at least one edge case (for instance, non-numeric inputs).

const should = require("chai").should();
const fizzBuzzer = require("../fizzBuzzer");

// Test the edge case
describe('fizzBuzzer', function() {
    it('Should raise err if args are non-numeric', function() {
        const badInputs = [false, "six", "a", "4", [4]];
        // Prove that the error is raised for bad input
        badInputs.forEach(function(input) {
            (function(){
                fizzBuzzer(input);
            }).should.throw(Error);
        });
    });
    // Test the normal case
    it('Should return fizzbuzzer for numbers divisible by 15', function() {
        const normalCases15 = [15, 30, 45, 60, 75, 90];
        normalCases15.forEach(function(num) {
            let answer = fizzBuzzer(num);
            answer.should.equal('fizz-buzz');
        });
    });
    it('Should return buzz for numbers divisible by 5', function() {
        const normalCases5 = [10, 5, 35, 20, 25];
        normalCases5.forEach(function(num) {
            let answer = fizzBuzzer(num);
            answer.should.equal('buzz');
        });
    });
    it('Should return fizz for numbers divisible by 3', function() {
        const normalCases3 = [3, 9, 12, 21, 33];
        normalCases3.forEach(function(num) {
            let answer = fizzBuzzer(num);
            answer.should.equal('fizz');
        });
    });
});

// mocha.run();