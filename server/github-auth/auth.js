// import passport, { Strategy } from 'passport-github2';
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const gitApi = require('./config');
const User = require('../../server/db/dbmodel').Users;
// import { clientSecret, clientID, callbackURL } from './config';
passport.use(new GithubStrategy({
  clientID: gitApi.github.clientID,
  clientSecret: gitApi.github.clientSecret,
  callbackURL: gitApi.github.callbackURL,
}, (accessToken, refreshToken, profile, cb) => {
    User.findOne({ githubId: profile.id }, (err, user) => {
      if (err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        cb(null, user);
      } else {
        user = new User({
          accessToken: accessToken,
          githubId: profile.id,
          name: profile.displayName,
          created: Date.now(),
        });
        user.save((err) => {
          if (err) {
            console.log(err);  // handle errors!
          } else {
            console.log('saving user ...');
            cb(null, user);
          }
        });
      }
    });
  }
));


// passport.use(new GithubStrategy({
//   clientID: config.github.clientID,
//   clientSecret: config.github.clientSecret,
//   callbackURL: config.github.callbackURL
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOne({ oauthID: profile.id }, function(err, user) {
//       if(err) {
//         console.log(err);  // handle errors!
//       }
//       if (!err && user !== null) {
//         done(null, user);
//       } else {
//         user = new User({
//           oauthID: profile.id,
//           name: profile.displayName,
//           created: Date.now()
//         });
//         user.save(function(err) {
//           if(err) {
//             console.log(err);  // handle errors!
//           } else {
//             console.log("saving user ...");
//             done(null, user);
//           }
//         });
//       }
//     });
//   }
// ));
