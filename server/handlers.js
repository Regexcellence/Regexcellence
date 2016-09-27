const handlers = require('./db/dbQueryHandler');
const checkAuth = require('./utils').checkAuth;

module.exports = (app) => {
  app.get('/regex/challenges', (req, res) => {
    console.log('SESSION:', req.session);
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
      res.end('challenge created');
    });
  });
};
