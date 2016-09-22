
const handlers = require('./db/dbQueryHandler');

module.exports = {
  GET: (app) => {
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
  },
  POST: (app) => {
    app.post('/regex/challenges', (req, res) => {
      handlers.postChallenges((challenges) => {
        res.json({ message: 'challenge created' });
      });
    });
  },
};
