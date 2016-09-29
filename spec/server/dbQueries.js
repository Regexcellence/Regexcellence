const should = require('should');
const request = require('request');

const model = require('../../server/db/dbmodel');
const userHandlers = require('../../server/db/userHandlers');

const Challenges = model.Challenges;
const Tutorial = model.Tutorial;
const Users = model.Users;

const john_doe = {
	username: 'johnny'
};

beforeEach((done) => {
	userHandlers.addUser(john_doe, (newUser) => {
		newUser.should.be.instanceOf(Object)
	})
});

// should.exist(addUser);
// userHandlers.addUser(john_doe, (newUser) => {
// 	newUser.should.be.instanceOf(Object);
// });

describe('User Handlers', () => {
	describe('Adding a new user', () => {
		it('Should be able to add a new user', (done) => {
			
		});
	});
	xdescribe('Getting User Info', () => {

	})
	xdescribe('Posting User Info', () => {

	})
})
