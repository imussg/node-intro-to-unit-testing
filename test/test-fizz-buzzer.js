// import chai, declare expect variable
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	//////////////////////////////////////////////////////////////////////////////
	// if divisible by 3, return fizz; if 5, return buzz; if both, return fizzbuzz
	//////////////////////////////////////////////////////////////////////////////
	it('should output fizz if divisible by 3', function() {
		
		const normalCase = {a: 3, expected: 'fizz'};
			// {a: 5, expected: 'buzz'},
			// {a: 300, expected: 'fizz-buzz'};
		const answer = fizzBuzzer(normalCase.a);
		expect(answer).to.equal(normalCase.expected);
	});
	
	it('should output buzz if divisible by 5', function() {
		const normalCase = {a: 5, expected: 'buzz'};
		const answer = fizzBuzzer(normalCase.a);
		expect(answer).to.equal(normalCase.expected);
	});

	it('should output fizz-buzz if divisible by both 3 and 5', function() {
		const normalCase = {a: 15, expected: 'fizz-buzz'};
		const answer = fizzBuzzer(normalCase.a);
		expect(answer).to.equal(normalCase.expected);
	});

	it('should raise errors if input is not a number', function() {
		const badInputs = ['5', false];
		badInputs.forEach(item => {
			expect(function() {
				fizzBuzzer(item);
			}).to.throw(Error);
		});
	});

});