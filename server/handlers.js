const handlers = require('./db/dbQueryHandler');
const passport = require('passport');

module.exports = (app) => {
  const checkAuth = (req, res, next) => {
    console.log('REQUESST session:', req.session);
    console.log('Passport session:', req.session.passport.session);
    if (req.isAuthenticated()) {
      console.log('YES');
      next();
    } else {
      res.redirect('/#');
    }
  };

  app.get('/regex/challenges', checkAuth, (req, res) => {
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
