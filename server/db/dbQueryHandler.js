const models = require('./dbmodel');

module.exports = {
  getChallenges: (callback) => {
    models.Challenges.find({}, (err, challenges) => {
      if (err) throw err;
      callback(challenges);
    });
  },
  postChallenges: (callback, req) => {
    models.Challenges.save(newChallenge, (err, tutorial) => {
    //This function will eventually take information for the input forms and use it to make a post request, but right now this is a placeholder for that function.
    if (err) throw err;
      callback(challenges);
    });
  },
  getTutorial: (callback) => {
    models.Tutorial.find({}, (err, tutorial) => {
      if (err) throw err;
      callback(tutorial);
    });
  },
};

