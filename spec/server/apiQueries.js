const should = require('should');
const request = require('supertest');
const server = request.agent('http://localhost:3000');

const app = require('../../index');

const agent = request.agent(app);


describe('Requesting Challenge and Tutorial Data', () => {
  beforeEach((done) => {
    done();
  });
  describe('Challenges', () => {
    it('Should respond with a Challenges Array', (done) => {
      agent.get('/regex/challenges')
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
      agent.get('/regex/tutorial')
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

describe('User Handling', () => {
  function loginUser() {
    return (done) => {
      function onResponse(err, res) {
        should.exist(res.headers['set-cookie']);
        if (err) return done(err);
        return done();
      }
      server.get('/regex/auth/github')
      .expect(302)
      .end(onResponse);
     };
   }

  beforeEach((done) => {
    loginUser();
    done();
  });
  describe('Challenge Post', () => {
    it('Should login users and redirect', loginUser());
    it('Should end with "challenge created"', (done) => {
      agent.post('/regex/challenges/new-challenge')
      .send({
        "name": "No Comments",
        "author": "ReginaldTheRegexDog",
        "description": "Math the valid javascript comments",
        "difficulty": 2,
        "testCases": [
          {"case": "// San Francisco Makersquare!", "expectation": true},
          {"case": "/* San Francisco Makersquare! */", "expectation": true},
          {"case": "// Do it for the kitties!!", "expectation": true},
          {"case": "/ / function getRegexcellence(cat) {return cat}", "expectation": false},
          {"case": "/Hi*/Team*/Regexcellence*/", "expectation": false},
          {"case": "supercalifragilisticexpialidocious", "expectation": false}
        ]
      })
      .expect(200)
      .expect('challenge created', done);
    });
  });
  describe('GET user-info', () => {
    it('Should retrieve user data but doesn\'t work!!', (done) => {
      agent.get('/regex/user-info')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.be.instanceOf(Object);
        done();
      });
    });
  });

  describe('POST completed-challenge to list', () => {
    it('Should respond with "challenge completed"', (done) => {
      agent.post('/regex/challenges/completed-challenge?57f5bb3033955d001122a971')
      .expect(200)
      .expect('challenge completed', done);
    });
  });
});

/*
  app.post('/regex/challenges/completed-challenge?', (req, res) => {
    const userId = url.parse(req.url).query;
    userHandlers.postCompletedChallenge(req.body.challengeId, userId, (updatedUser) => {
      res.end('challenge created');
    });
  });
  app.post('/regex/challenges/new-answer?', (req, res) => {
    const query = url.parse(req.url).query;
    dbHandlers.postChallengeAnswer(req.body, query, (updatedChallenge) => {
      res.end('successfully updated answer!');
    });
  });
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
