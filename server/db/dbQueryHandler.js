const mongoose = require('mongoose');
const models = require('./dbmodel');

// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const Challenges = models.Challenges;
const Tutorial = models.Tutorial;

const userHandlers = require('./userHandlers');
const parseChallengeName = require('../utils').parseChallengeName;

const dbQueryHandler = {};

dbQueryHandler.getChallenges = (callback) => {
  Challenges.find({}, (err, challenges) => {
    if (err) throw err;
    callback(challenges);
  });
};

dbQueryHandler.postChallenge = (challengeObject, callback) => {
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
dbQueryHandler.postChallengeAnswer = (data, challengeId, callback) => {
  const answer = {
    answer: data.answer,
    user: data.username || 'Anonymous',
    userId: data.userId || null
  }
  models.Challenges.findOneAndUpdate({ _id: challengeId }, { $push: { answers: answer }}, { new: true }, (err, model) => {
    if (err) throw err;
    callback(model);
  });
};
dbQueryHandler.getTutorial = (callback) => {
  Tutorial.find({}, (err, tutorial) => {
    if (err) throw err;
    callback(tutorial);
  });
};


module.exports = dbQueryHandler;
