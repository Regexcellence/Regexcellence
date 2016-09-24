const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const gitHubAuth = require('./server/github-auth/auth');
const User = require('./server/db/dbmodel').Users;

const app = express();

app.use(session({ secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 300000 },
}));
app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
const handleRequest = require('./server/handlers');
handleRequest(app);

const mongoose = require('mongoose');
const MONGO_URI = require('./config').MONGO_URI;

const port = process.env.PORT || 3000;
app.set('port', port);
process.env.PWD = process.cwd();

const TARGET = process.env.npm_lifecycle_event;
if (TARGET !== 'devStart') {
  app.use(express.static(path.join(process.env.PWD, 'build')));
}

// serialize and deserialize
passport.serializeUser((user, done) => {
  console.log('serializeUser: ', user.accessToken);
  done(null, user);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    console.log('INSIDE DESERIALZE! USER DATTA: ', user);
      if(!err) done(null, user);
      else done(err, null);
    });
});

app.get('/auth/github',
passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback',
passport.authenticate('github', { failureRedirect: '/' }),
(req, res) => {
  console.log('SESSION:', req.session);
  res.redirect('/#');
});

mongoose.connect(MONGO_URI);
app.listen(port, () => { console.log(`Listening on http://localhost:${port}/`); });
