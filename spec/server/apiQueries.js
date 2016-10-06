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

  describe('POST new answers', () => {
    it('Should respond with "Successfully updated answer!"', (done) => {
      agent.post('/regex/challenges/new-answer?57f3191f2bf2082f7a74ccd5')
      .send({
        answer: '/\D/',
        user: 'ReginaldTheRegexDog',
        userId: '57f5bb3033955d001122a971'
      })
      .expect(200)
      .expect('Successfully updated answer!', done);
    });
  });

  describe('GET User Completed', () => {
    it('Should respond with an array of completed challenges', (done) => {
      agent.get('/regex/challenges/user-completed?57f5bb3033955d001122a971')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.be.instanceOf(Array);
        done();
      });
    });
  });

  describe('GET Authored Challenges', () => {
    it('Should respond with an array of authored challenges', (done) => {
      agent.get('/regex/user-info/authored-challenges?57f5bb3033955d001122a971')
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
