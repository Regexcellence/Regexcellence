const app = require('../index');
const handlers = require('./db/dbQueryHandler');

module.exports = (app) => {
  app.get('/regex/challenges', (req, res) => {
    // Review if async issues become a problem!
    console.log('responding to challenges');
    handlers.getChallenges((challenges) => {
      res.send(challenges);
    });
  });
};
