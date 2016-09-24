const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const gitHubAuth = require('./server/github-auth/auth');

const app = express();
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
  console.log('serializeUser: ', user._id);
  done(null, user._id);
});
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     console.log(user);
//       if(!err) done(null, user);
//       else done(err, null);
//     });
// });
app.get('/auth/github', passport.authenticate('github', { session: false, scope: ['user:email'] }));

app.get('/auth/github/callback',
passport.authenticate('github', { session: false, failureRedirect: '/' }),
(req, res) => {
  console.log('RESPONSE', res);
  res.redirect('/#');
});

mongoose.connect(MONGO_URI);
app.listen(port, () => { console.log(`Listening on http://localhost:${port}/`); });
