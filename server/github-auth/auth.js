const GithubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../server/db/dbmodel').Users;

module.exports = () => {
  passport.use(new GithubStrategy({
    clientID: process.env.GITHUBID || require('../../config').GITHUB.github.clientID,
    clientSecret: process.env.GITHUBSECRET || require('../../config').GITHUB.github.clientSecret,
    callbackURL: process.env.URL || require('../../config').GITHUB.github.callbackURL,
  }, (accessToken, refreshToken, profile, cb) => {
      User.findOne({ githubId: profile.id }, (err, user) => {
        if (err) {
          console.log(err);  // handle errors!
        } else if (!user) {
          user = new User({
            accessToken,
            refreshToken,
            _id: mongoose.Types.ObjectId(),
            gitHandle: profile.username,
            githubId: profile.id,
            name: profile.displayName,
            created: Date.now(),
            company: profile._json.company,
            blog: profile._json.blog,
            location: profile._json.location,
            bio: profile._json.bio,
            html_url: profile._json.html_url,
            avatar_url: profile._json.avatar_url,
            authored_challenges: [],
            completed_challenges: [],
            tutorial_progress: '',
          });
          user.save((err) => {
            if (err) {
              console.log(err);  // handle errors!
            } else {
              //console.log('INSIDE USER SAVE!', user);
              cb(null, user);
            }
          });
        } else {
          //console.log('CCCCBBBB', cb, 'USER:', user);
          cb(null, user);
        }
      });
    }
  ));
};
