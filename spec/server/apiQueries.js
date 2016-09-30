const should = require('should');
const request = require('request');

xdescribe('Requesting Challenge and Tutorial Data', () => {
	describe('Challenges', () => {
		it('Should respond with a Challenges Array', (done) => {
			request('http://localhost:3000/regex/challenges', (err, response, body) => {
				(response.statusCode).should.be.exactly(200);
				(JSON.parse(body)).should.be.instanceOf(Array);
				done();
			});
		});
	});
	describe('Tutorials', () => {
		it('Should respond with a Tutorials Array', (done) => {
			request('http://localhost:3000/regex/tutorial', (err, response, body) => {
				(response.statusCode).should.be.exactly(200);
				(JSON.parse(body)).should.be.instanceOf(Array);
				done();
			});
		});
	});
});

