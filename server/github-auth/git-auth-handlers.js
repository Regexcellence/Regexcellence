const passport = require('passport');
const session = require('express-session');
const githubAuth = require('./auth');
const User = require('../db/dbmodel').Users;

module.exports = (app) => {
  app.use(session({ secret: 'blah blah blah cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3000000 },
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // ADDS SESSION DATA OBJECT TO USER SESSION
  passport.serializeUser((user, done) => {
    //console.log('serializeUser: ', user.accessToken);
    done(null, user);
  });

  // CLEARS SESSION DATA EACH TIME A NEW ONE IS INITIALIZED
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      //console.log('INSIDE DESERIALZE! USER DATTA: ', user);
        if (!err) done(null, user);
        else done(err, null);
      });
  });

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  githubAuth();

  app.get('/regex/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    //console.log('SESSION:', req.session);
    res.redirect('/#');
  });

  app.get('/regex/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

 
};
