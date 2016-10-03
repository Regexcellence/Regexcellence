const should = require('should');
var request = require('supertest');

const app = require('../../index');

var agent = request.agent(app);

describe('Requesting Challenge and Tutorial Data', () => {
	beforeEach((done) => {

		done();
	})
	describe('Challenges', () => {
		it('Should respond with a Challenges Array', (done) => {
			agent
			.get('/regex/challenges')
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
				if (err) return done(err);
				res.body.challenges.should.be.instanceOf(Array);
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

/*

  app.post('/regex/challenges/new-challenge', (req, res) => {
    dbHandlers.postChallenge(req.body, () => {
      res.end('challenge created');
    });
  });
  app.post('/regex/challenges/completed-challenge?', (req, res) => {
    const userId = url.parse(req.url).query;
    userHandlers.postCompletedChallenge(req.body.challengeId, userId, (updatedUser) => {
      res.end('challenge created');
    });
  });
  app.post('/regex/challenges/new-answer?', (req, res) => {
    const query = url.parse(req.url).query;
    dbHandlers.postChallengeAnswer(req.body, query, (updatedChallenge) => {
      res.end('Successftully updated answer!');
    });
  });
  // TODO: Save more.
  app.get('/regex/challenges/user-completed?', (req, res) => {
    const userId = url.parse(req.url).query;
    userHandlers.findUserRelatedChallenges(userId, 'completed_challenges', (completedChallenges) => {
      res.send(completedChallenges)
    })
  });
  app.get('/regex/user-info/authored-challenges?', (req, res) => {
    const userId = url.parse(req.url).query;
    userHandlers.findUserRelatedChallenges(userId, 'authored_challenges', (authoredChallenges) => {
      res.send(authoredChallenges);
    });
  });
  app.get('/regex/user-info', (req, res) => {
    if (req.user) {
      console.log('requested user info is ', req.user._id);
      res.send(req.user);
    } else {
      res.send('Not logged in!')
    }
  });
  app.get('/regex/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect('/');
    });
  })

*/