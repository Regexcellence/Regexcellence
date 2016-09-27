const url = require('url');

const dbHandlers = require('./db/dbQueryHandler');
const checkAuth = require('./utils').checkAuth;

module.exports = (app) => {
  app.get('/regex/challenges', checkAuth, (req, res) => {
    console.log('SESSION:', req.session);
  // Review if async issues become a problem!
    dbHandlers.getChallenges((challenges) => {
      res.send(challenges);
    });
  });
  app.get('/regex/tutorial', (req, res) => {
    dbHandlers.getTutorial((tutorial) => {
      res.send(tutorial);
    });
  });
  app.post('/regex/challenges?*', (req, res) => {
    const query = url.parse(req.url).query;
    console.log(query, req.body);
    dbHandlers.postChallengeAnswer(req.body, query, (updatedChallenge) => {
      res.end('Successfully updated answer!');
    });
  });
  app.post('/regex/challenges', (req, res) => {
    dbHandlers.postChallenge(req.body, () => {
      res.end('challenge created');
    });
  });
  app.get('/regex/user-info?*', (req, res) => {
    handlers.getUserInfo(13708462 , (info) => {
      res.send(info);
    });
  });
};
