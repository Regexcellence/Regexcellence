const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const gitApi = require('../../config').GITHUB;
const User = require('../../server/db/dbmodel').Users;

module.exports = () => {
  passport.use(new GithubStrategy({
    clientID: process.env.GITHUBID || gitApi.github.clientID,
    clientSecret:  process.env.GITHUBSECRET || gitApi.github.clientSecret,
    callbackURL: process.env.URL || gitApi.github.callbackURL,
  }, (accessToken, refreshToken, profile, cb) => {
      User.findOne({ githubId: profile.id }, (err, user) => {
        if (err) {
          console.log(err);  // handle errors!
        } else if (!user) {
          user = new User({
            accessToken,
            refreshToken,
            githubId: profile.id,
            name: profile.displayName,
            created: Date.now(),
            company: profile._json.company,
            blog: profile._json.blog,
            location: profile._json.location,
            bio: profile._json.bio,
            html_url: profile._json.html_url,
            avatar_url: profile._json.avatar_url,
          });
          user.save((err) => {
            if (err) {
              console.log(err);  // handle errors!
            } else {
              console.log('INSIDE USER SAVE!', user);
              cb(null, user);
            }
          });
        } else {
          console.log('CCCCBBBB', cb, 'USER:', user);
          cb(null, user);
        }
      });
    }
  ));
};
