const should = require('should');
const request = require('supertest');
const server = request.agent('http://localhost:3001');
const mongoose = require('mongoose');
const app = require('../../index');
const Users = require('../../server/db/dbmodel').Users;
const Challenges = require('../../server/db/dbmodel').Challenges;


const agent = request.agent(app);

describe('Requesting Challenge and Tutorial Data', () => {
  beforeEach((done) => {
    done();
  });
  describe('Challenges', () => {
    it('Should respond with a Challenges Array', (done) => {
      server.get('/regex/challenges')
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
  let abc_challenge = {
    name: "Abcs",
    description: "Write a regex that matches whitespace at the beginning and end of strings",
    author: 'johndoe',
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
  const johndoe = new Users({
    gitHandle: 'johndoe',
    _id: mongoose.Types.ObjectId(),
    tutorial_progress: {
      order: -1,
      tutorialUrl: ''
    },
    completed_challenges: [
      "57f3191f2bf2082f7a74cd0c",
      "57f3191f2bf2082f7a74ccd5"
    ],
    authored_challenges: [1, 2, 3, 4]
  });

  beforeEach((done) => {
    johndoe.save((err, newUser) => {
      if (err) throw err;
      return newUser;
    });
    done();
  });

  after((done) => {
    Users.remove({ gitHandle: 'johndoe' }, (err, deleted) => {
      if (err) throw err;
    });
    Challenges.findOneAndRemove({ author: 'johndoe' }, (err, removed) => {
      if (err) throw err;
      done();
    });
  });

  describe('User Login', () => {
    it('Should login users and redirect', (done) => {
      agent.get('/regex/auth/github')
      .expect(302)
      .end();
      done();
    });
  });

  describe('Challenge Post', () => {
    after((done) => {
      Challenges.findOneAndRemove({ author: 'johndoe' }, (err, removed) => {
        if (err) throw err;
        done();
      });
    });
    it('Should end with "challenge created"', (done) => {
      agent.post('/regex/challenges/new-challenge')
      .send(abc_challenge)
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
      agent.post('/regex/challenges/completed-challenge?' + johndoe._id)
      .expect(200)
      .expect('challenge completed', done);
    });
  });

  describe('POST new answers', () => {
    it('Should respond with "Successfully updated answer!"', (done) => {
      agent.post('/regex/challenges/new-answer?57f3191f2bf2082f7a74ccd5')
      .send({
        answer: '/\D/',
        user: 'johndoe',
        userId: johndoe._id
      })
      .expect(200)
      .expect('Successfully updated answer!', done);
    });
  });

  describe('GET User Completed', () => {
    it('Should respond with an array of completed challenges', (done) => {
      console.log('john_doe', johndoe._id);
      agent.get('/regex/challenges/user-completed?' + johndoe._id)
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
      agent.get('/regex/user-info/authored-challenges?' + johndoe._id)
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
