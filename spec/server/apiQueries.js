const should = require('should');
var request = require('supertest');

const app = require('../../index');
var agent = request.agent(app);

describe('Requesting Challenge and Tutorial Data', () => {
	describe('Challenges', () => {
		it('Should respond with a Challenges Array', (done) => {
			agent
			.get('/regex/challenges')
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
				if (err) return done(err);
				res.body.should.be.instanceOf(Array);
				done();
			});
		});
	});
	describe('Tutorials', () => {
		it('Should respond with a Tutorials Array', (done) => {
			agent
			.get('/regex/tutorial')
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
				if (err) return done(err);
				res.body.should.be.instanceOf(Array);
				done();
			});
		});
	});
});

