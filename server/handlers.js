const app = require('../index');
const getChallenges = require('./db/dbQueryHandler');

module.exports = (app) => {
  app.get('/regex/challenges', (req, res) => {
    // Review if async issues become a problem!
    getChallenges((challenges) => {
      console.log(challenges);
      res.send(challenges);
    });
  });
};
