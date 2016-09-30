const should = require('should');

// describe('Circle CI environment variables should be set up', () => {
// 	it('Should have env variable CIRCLECI', () => {
// 		process.env.CIRCLECI.should.be.ok;
// 		process.env.CI.should.be.ok;
// 	})
// })


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//const MONGO_URI = process.env.MONGO_URI || require('../../config').MONGO_URI;
let MONGO_URI = '';
try {
	MONGO_URI = require('../../config').MONGO_URI;
} 
catch(err) {
	MONGO_URI = process.env.MONGO_URI;
	console.log('No config file, new mongo_uri is ', MONGO_URI);
}


mongoose.connect(MONGO_URI);

const model = require('../../server/db/dbmodel');
const Challenges = model.Challenges;
const Tutorial = model.Tutorial;
const Users = model.Users;

const userHandlers = require('../../server/db/userHandlers');
const dbQueryHandler = require('../../server/db/dbQueryHandler');

const john_doe = new Users({
	gitHandle: 'john_doe',
	_id: mongoose.Types.ObjectId()
});

let abc_challenge = {
	name: "Abcs",
	description: "Write a regex that matches whitespace at the beginning and end of strings",
	author: 'john_doe',
	difficulty: 2,
	testCases: [
	  { case: " I have whitespace! ", expectation: true },
	  { case: "I have more whitespace!   ", expectation: true },
	  { case: "   I have some whitespace too!", expectation: true },
	  { case: "Did you say whitespace?", expectation: false },
	  { case: "Naw", expectation: false },
	  { case: "Remember me?", expectation: false }
	]
};

describe('Database Handlers', () => {

	let userId = '';
	before((done) => {
		john_doe.save((err, newUser) => {
			if (err) done(err);
			userId = newUser._id;
			abc_challenge.authorId = userId;
			abc_challenge._id = mongoose.Types.ObjectId();
			abc_challenge = new Challenges(abc_challenge);
			done();
		});
	});
	after((done)=>  {
		Users.remove({ gitHandle: 'john_doe'}, (err, deleted) => {
			if (err) done(err);
			done();
		})
	}); 

	describe('Challenge Handlers', () => {
		describe('Getting Challenge Data', () => {
			it('getChallenges: Should return all the challenges currently in db', (done) => {
				const getChallenges = dbQueryHandler.getChallenges;
				should.exist(getChallenges);
				getChallenges((challenges) => {
					challenges.should.be.instanceOf(Array);
					challenges.length.should.be.ok;
					challenges.forEach((challenge) => {
						challenge.should.be.instanceOf(Object);
					})
					done();	
				})
			});
		});
		describe('Posting Challenge Data', () => {
			let challengeId = '';
			after((done) => {
				Challenges.findOneAndRemove({ authorId: userId }, (err, removed) => {
					if (err) throw err;
					done();
				});
			});
			it('postChallenge: Should be able to post challenges', (done) => {
				const postChallenge = dbQueryHandler.postChallenge;
				should.exist(postChallenge);
				postChallenge(abc_challenge, (newChallenge) => {
					newChallenge.should.be.instanceOf(Object);
					newChallenge.should.have.properties(
						['_id', 'name', 'nameurl', 'description', 'author', 'authorId', 'difficulty', 'testCases', 'answers']
					);
					challengeId = newChallenge._id;
					done();
				});
			});
			it("postChallengeAnswer: Should be able to post a user's answer", (done) => {
				const postChallengeAnswer = dbQueryHandler.postChallengeAnswer;
				const answer = {
					answer: '/abc/',
					user: 'john_doe',
					userId,
				};
				postChallengeAnswer(answer, challengeId, (updatedChallenge) => {
					updatedChallenge.answers.length.should.equal(1);
					const answerObject = updatedChallenge.answers[0]
					answerObject.should.be.instanceOf(Object);
					answerObject.should.have.properties(['answer', 'user', 'userId']);
					done();
				})
			});
		});
	});
	describe('Tutorial Handlers', () => {
		describe('Getting Tutorial Data', () => {
			it('getTutorial: Should get all of the tutorial data', (done) => {
				const getTutorial = dbQueryHandler.getTutorial;
				should.exist(getTutorial);
				getTutorial((tutorials) => {
					tutorials.length.should.be.ok;
					tutorials.should.be.instanceOf(Array);
					tutorials.forEach((tutorial) => {
						tutorial.should.have.property('order');
					})
					done();
				})
			});
		});
	});
	describe('User Handlers', () => {
		let challengeId = '';
		before((done) => {
			dbQueryHandler.postChallenge(abc_challenge, (newChallenge) => {
				challengeId = newChallenge._id;
				done();
			});
		})
		after((done) => {
			Challenges.findOneAndRemove({ authorId: userId }, (err, removed) => {
				if (err) throw err;
				done();
			});
		});
		describe('Getting User Info', () => {
			it('getUserInfo: Should be able to query user info', (done) => {
				const getUserInfo = userHandlers.getUserInfo;
				should.exist(getUserInfo);
				getUserInfo(userId, (userData) => {
					userData.should.be.instanceOf(Object);
					userData._id.should.be.instanceOf(Object);
					done();
				});
			});
		});
		describe('Posting User Info', () => {
			it('addToAuthoredChallenge: Should be able to post to the users authored challenges', (done) => {
				const addToAuthoredChallenge = userHandlers.addToAuthoredChallenge;
				should.exist(addToAuthoredChallenge);
				addToAuthoredChallenge(challengeId, userId, (updatedUser) => {
					should.exist(updatedUser.authored_challenges);
					updatedUser.authored_challenges.length.should.equal(3);
					done();
				});
			});
			it('postCompletedChallenge: Should be able to add challengeIds to user completed_challenges property', (done) => {
				const postCompletedChallenge = userHandlers.postCompletedChallenge;
				should.exist(postCompletedChallenge);
				postCompletedChallenge(challengeId, userId, (updatedUser) => {
					updatedUser.completed_challenges.length.should.equal(1);
					updatedUser.completed_challenges[0].should.deepEqual(challengeId);
					done();
				});
			});
			it('findUserRelatedChallenges: Should be able to return challenge objects for user completed_challenges', (done) => {
				const findUserRelatedChallenges = userHandlers.findUserRelatedChallenges;
				should.exist(findUserRelatedChallenges);
				userId.should.be.instanceOf(Object);
				findUserRelatedChallenges(userId, 'completed_challenges', (challenges) => {
					challenges.length.should.equal(1);
					const firstCompletedChallenge = challenges[0];
					firstCompletedChallenge.should.be.instanceOf(Object);
					done();
				});
			});
			it('findUserRelatedChallenges: Should be able to return challenge objects for user authored challenges', (done) => {
				const findUserRelatedChallenges = userHandlers.findUserRelatedChallenges;
				findUserRelatedChallenges(userId, 'authored_challenges', (challenges) => {
					challenges.length.should.equal(1);
					done();
				});
			});
		});
	});

});

// TODO: Test below functions 

// exports.verifyUserExistence = (githubProfile, callback) => {
// 	Users.findOne({ githubId: githubProfile.id }, (err, user) => {
// 		if (err) throw err;
// 		if (!user) {
// 			exports.addUser(githubProfile, (newUser) => {
// 				callback(newUser)
// 			});
// 		} else {
// 			callback(user)
// 		}
// 	})
// };

// exports.addUser = (githubProfile, callback) => {
// 	const user = new Users({
//     accessToken: githubProfile.accessToken,
//     refreshToken: githubProfile.refreshToken,
//     _id: mongoose.Types.ObjectId(),
//     gitHandle: githubProfile.username,
//     githubId: githubProfile.id,
//     name: githubProfile.displayName,
//     created: Date.now(),
//     avatar_url: githubProfile._json.avatar_url,
//     authored_challenges: [],
//     completed_challenges: [],
//     tutorial_progress: '',
//   });
//   user.save((err, newUser) => {
//   	if (err) throw err;
//   	callback(newUser);
//   });
// };


