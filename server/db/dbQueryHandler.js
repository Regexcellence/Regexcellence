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
  getTutorial: (callback) => {
    models.Tutorial.find({}, (err, tutorial) => {
      if (err) throw err;
      callback(tutorial);
    });
  },
};

