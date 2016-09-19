const Challenges = require('./dbmodel');

module.exports = getChallenges = (callback) => {
  Challenges.find({}, (err, challenges) => {
    if (err) throw err;
    callback(challenges);
  });
};
