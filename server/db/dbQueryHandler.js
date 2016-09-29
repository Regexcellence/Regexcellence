const mongoose = require('mongoose');
const models = require('./dbmodel');

// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const Challenges = models.Challenges;

const userHandlers = require('./userHandlers');
const parseChallengeName = require('../utils').parseChallengeName;

const dbQueryHandlers = {};

dbQueryHandlers.getChallenges = (callback) => {
  Challenges.find({}, (err, challenges) => {
    if (err) throw err;
    callback(challenges);
  });
};

dbQueryHandlers.postChallenge = (challengeObject, callback) => {
  challengeObject._id = mongoose.Types.ObjectId();
  challengeObject.nameurl = parseChallengeName(challengeObject.name);
  const NewChallenge = new Challenges(challengeObject);
  NewChallenge.save((err, newData) => {
    if (err) throw err;
    const userId = challengeObject.authorId;
    userHandlers.addToAuthoredChallenge(newData._id, userId, () => {
      callback(newData);
    })
  });
};
dbQueryHandlers.postChallengeAnswer = (data, query, callback) => {
  console.log('in post challenge answer')
  const answer = {
    answer: data.answer,
    user: data.username || 'Anonymous',
    userId: data.userId || null
  }
  models.Challenges.findOneAndUpdate({ _id: query }, { $push: { answers: answer }}, { new: true }, (err, model) => {
    if (err) throw err;
    callback(model);
  });
};
dbQueryHandlers.postCompletedChallenge = (challengeId, userId, callback) => {
  models.Users.findOneAndUpdate({ _id: userId }, { $push: { completed_challenges: challengeId }}, { new: true }, (err, model) => {
    if (err) throw err;
    callback(model);
  });
};
dbQueryHandlers.findUserRelatedChallenges = (userId, desiredProperty, callback) => {
  models.Users.findOne({ _id: userId }, (err, userData) => {
    if (desiredProperty === 'completed_challenges') {
      if (!userData.completed_challenges.length) {
        callback(null);
        return; 
      }
      const completed_challenges = userData.completed_challenges.map((challengeId) => {
        return mongoose.Types.ObjectId(challengeId);
      });
      Challenges.find({ _id: { $in: completed_challenges }}, (err, challenges) => {
        if (err) throw err;
        callback(challenges);
      });
    } else if (desiredProperty === 'authored_challenges') {
      if (!userData.authored_challenges.length) {
        callback(null);
        return; 
      }
      const authored_challenges = userData.authored_challenges.map((challengeId) => {
        return mongoose.Types.ObjectId(challengeId);
      });
      Challenges.find({ _id: { $in: authored_challenges }}, (err, challenges) => {
        if (err) throw err;
        callback(challenges);
      });
    }
  });
};
dbQueryHandlers.getTutorial = (callback) => {
  models.Tutorial.find({}, (err, tutorial) => {
    if (err) throw err;
    callback(tutorial);
  });
};


module.exports = dbQueryHandlers;
