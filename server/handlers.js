const app = require('../index');
const handlers = require('./db/dbQueryHandler');

module.exports = {
  GET: (app) => {
    app.get('/regex/challenges', (req, res) => {
    // Review if async issues become a problem!
      console.log('responding to challenges');
      handlers.getChallenges((challenges) => {
        res.send(challenges);
      });
    });
  },
  POST: (app) => {
    app.post('/regex/challenges', (req, res) => {
      console.log("inside POST", req.body);
      handlers.postChallenges((challenges, req) => {
        console.log('posting to challenges');
        res.json({ message: 'challenge created' });
      });
    });
  },
};
