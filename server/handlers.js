const handlers = require('./db/dbQueryHandler');
const checkAuth = require('./utils').checkAuth;

module.exports = (app) => {
  app.get('/regex/challenges', checkAuth, (req, res) => {
    console.log('SESSION:', req.session);
  // Review if async issues become a problem!
    handlers.getChallenges((challenges) => {
      res.send(challenges);
    });
  });
  app.get('/regex/tutorial', checkAuth, (req, res) => {
    handlers.getTutorial((tutorial) => {
      res.send(tutorial);
    });
  });
  app.post('/regex/challenges', checkAuth, (req, res) => {
    handlers.postChallenge(req.body, () => {
      res.end('challenge created');
    });
  });
};
// app.get('/checkAuth', checkAuth, (req, res) => {
//   console.log('SESSION', req.session.passport.user);
//   User.findById(req.session.passport.user, (err, user) => {
//     if(err) {
//       console.log(err);  // handle errors
//     } else {
//       res.send('this works');
//     }
//   });
// });
