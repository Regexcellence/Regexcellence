const passport = require('passport');

exports = module.exports = {};

exports.parseChallengeName = str => (
  str.replace(/\s/g, '-')
  .replace(/[^-\w\d]/g, '')
  .replace(/[A-Z]/g, p1 => p1.toLowerCase())
);

exports.checkAuth = (req, res, next) => {
  console.log('REQUESST session:', req.session);
  if (req.isAuthenticated()) {
    console.log('USER AUTHENTICATED', req.session.passport.user.name);
    next();
  } else {
    res.end('ERROR: PLEASE LOGIN');
    // res.redirect('/#/home');
  }
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
