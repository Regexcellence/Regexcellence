const mongoose = require('mongoose');
const models = require('./dbmodel');
const Users = models.Users;

// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const Challenges = models.Challenges;
const Tutorial = models.Tutorial;

exports = module.exports = {};

exports.addUser = (githubProfile, callback) => {
  const user = new Users({
    accessToken: githubProfile.accessToken,
    refreshToken: githubProfile.refreshToken,
    _id: mongoose.Types.ObjectId(),
    gitHandle: githubProfile.username,
    githubId: githubProfile.id,
    name: githubProfile.displayName,
    created: Date.now(),
    avatar_url: githubProfile._json.avatar_url,
    authored_challenges: [],
    completed_challenges: [],
    tutorial_progress: {
      order: -1,
      tutorialUrl: ''
    },
  });
  user.save((err, newUser) => {
    if (err) throw err;
    callback(newUser);
  });
};

exports.verifyUserExistence = (githubProfile, callback) => {
  Users.findOne({ githubId: githubProfile.id }, (err, user) => {
    if (err) throw err;
    if (!user) {
      exports.addUser(githubProfile, (newUser) => {
        callback(newUser)
      });
    } else {
      callback(user)
    }
  })
};

// CURRENTLY NOT USED???
exports.getUserInfo = (_id, callback) => {
  Users.findOne({ _id }, (err, data) => {
    if (err) throw err;
    callback(data);
  });
};

exports.addToAuthoredChallenge = (challengeId, userId, callback) => {
  Users.findOneAndUpdate({ _id: userId }, { $push: { authored_challenges: challengeId }}, { new: true }, (err, model) => {
    if (err) throw err;
    callback(model);
  });
};

exports.postCompletedChallenge = (challengeId, userId, callback) => {
  Users.findOneAndUpdate({ _id: userId }, { $push: { completed_challenges: challengeId }}, { new: true }, (err, model) => {
    if (err) throw err;
    callback(model);
  });
};

exports.findUserRelatedChallenges = (userId, desiredProperty, callback) => {
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

exports.postTutorialProgress = (userId, tutorialNumber, callback) => {
  Users.findOne({ _id: userId }, (err, user) => {
    let tutorial_progress = {};
    if(tutorialNumber === 11) {
      tutorial_progress = {
        order: 11,
        tutorialUrl: 'matching-phone-numbers'
      };
      Users.findOneAndUpdate({ _id: userId }, { tutorial_progress }, { new: true }, (err, updatedUser) => {
        if (err) throw err;
        callback(updatedUser);
      });
    } else if (user.tutorial_progress.order < tutorialNumber) {
      Tutorial.findOne({ order: tutorialNumber +1 }, (err, tutorial) => {
        if (err) throw err;
        tutorial_progress = {
          order: tutorialNumber,
          tutorialUrl: tutorial.nameurl
        };
        Users.findOneAndUpdate({ _id: userId }, { tutorial_progress }, { new: true }, (err, updatedUser) => {
          if (err) throw err;
          callback(updatedUser);
        });
      });
    } else {
      callback(user);
    }
  });
};

// exports.findUserRelatedChallenges = (userId, callback) => {
//   models.Users.findOne({ _id: userId }, (error, userData) => {
//
//   });
// };
