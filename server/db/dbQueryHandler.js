const mongoose = require('mongoose');
const models = require('./dbmodel');

// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const Challenges = models.Challenges;

const parseChallengeName = require('../utils').parseChallengeName;

module.exports = {
  getChallenges: (callback) => {
    models.Challenges.find({}, (err, challenges) => {
      if (err) throw err;
      callback(challenges);
    });
  },
  postChallenge: (challengeObject, callback) => {
    challengeObject._id = mongoose.Types.ObjectId();
    challengeObject.nameurl = parseChallengeName(challengeObject.name);
    challengeObject.testPassed = false;
    console.log(challengeObject);
    const NewChallenge = new Challenges(challengeObject);
    NewChallenge.save((err, newData) => {
      if (err) throw err;
      callback(newData);
    });
  },
  postChallengeAnswer: (data, query, callback) => {
    console.log('in post challenge answer')
    models.Challenges.findOneAndUpdate({ _id: query }, { $push: { answers: { answer: data.answer, user: data.user || 'Anonymous' }}}, { new: true }, (err, model) => {
      if (err) throw err;
      callback(model);
    });
  },
  getTutorial: (callback) => {
    models.Tutorial.find({}, (err, tutorial) => {
      if (err) throw err;
      callback(tutorial);
    });
  },
  getUserInfo: (_id, callback) => {
    models.Users.findOne({ _id }, (err, data) => {
      if (err) throw err;
      callback(data);
    });
  },
};
