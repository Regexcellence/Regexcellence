const mongoose = require('mongoose');
const models = require('./dbmodel');
const Users = models.Users;

// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const Challenges = models.Challenges;

exports = module.exports = {};

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

exports.addUser = (githubProfile, callback) => {
	const user = new Users({
    accessToken: githubProfile.accessToken,
    refreshToken: githubProfile.refreshToken,
    _id: mongoose.Types.ObjectId(),
    gitHandle: githubProfile.username,
    githubId: githubProfile.id,
    name: githubProfile.displayName,
    created: Date.now(),
    company: githubProfile._json.company,
    blog: githubProfile._json.blog,
    location: githubProfile._json.location,
    bio: githubProfile._json.bio,
    html_url: githubProfile._json.html_url,
    avatar_url: githubProfile._json.avatar_url,
    authored_challenges: [],
    completed_challenges: [],
    tutorial_progress: '',
  });
  user.save((err, newUser) => {
  	if (err) throw err;
  	callback(newUser);
  });
};
