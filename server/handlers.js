const handlers = require('./db/dbQueryHandler');

module.exports = (app) => {
  app.get('/regex/challenges', (req, res) => {
  // Review if async issues become a problem!
    handlers.getChallenges((challenges) => {
      res.send(challenges);
    });
  });
  app.get('/regex/tutorial', (req, res) => {
    handlers.getTutorial((tutorial) => {
      res.send(tutorial);
    });
  });
  app.post('/regex/challenges', (req, res) => {
    handlers.postChallenge(req.body, () => {
      console.log(req.body);
      res.end('challenge created');
    });
  });
};
