const passport = require('passport');

exports = module.exports = {};

exports.parseChallengeName = str => (
  str.replace(/\s/g, '-')
  .replace(/[^-\w\d]/g, '')
  .replace(/[A-Z]/g, p1 => p1.toLowerCase())
);

exports.checkAuth = (req, res, next) => {
  console.log('REQUESST session:', req.session);
  console.log('Passport session:', req.session.passport.session);
  console.log('PASSSPORT SESSION', passport.session);
  if (req.isAuthenticated()) {
    console.log('YES');
    next();
  } else {
    res.redirect('/#');
  }
};
