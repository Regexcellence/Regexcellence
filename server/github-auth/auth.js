const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const gitApi = require('../../config').GITHUB;
const User = require('../../server/db/dbmodel').Users;

passport.use(new GithubStrategy({
  clientID: gitApi.github.clientID,
  clientSecret: gitApi.github.clientSecret,
  callbackURL: gitApi.github.callbackURL,
}, (accessToken, refreshToken, profile, cb) => {
    User.findOne({ githubId: profile.id }, (err, user) => {
      console.log('PROFILE DATA:', profile);
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
            cb(null, user);
          }
        });
      }
    });
  }
));

// GITHUB AUTH PROFILE
RETURN_OBJ = {
  login: 'bbtran',
  id: 13708462,
  avatar_url: 'https://avatars.githubusercontent.com/u/13708462?v=3',
  gravatar_id: '',
  url: 'https://api.github.com/users/bbtran',
  html_url: 'https://github.com/bbtran',
  followers_url: 'https://api.github.com/users/bbtran/followers',
  following_url: 'https://api.github.com/users/bbtran/following{/other_user}',
  gists_url: 'https://api.github.com/users/bbtran/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/bbtran/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/bbtran/subscriptions',
  organizations_url: 'https://api.github.com/users/bbtran/orgs',
  repos_url: 'https://api.github.com/users/bbtran/repos',
  events_url: 'https://api.github.com/users/bbtran/events{/privacy}',
  received_events_url: 'https://api.github.com/users/bbtran/received_events',
  type: 'User',
  site_admin: false,
  name: 'Ben Tran',
  company: null,
  blog: null,
  location: null,
  email: null,
  hireable: null,
  bio: null,
  public_repos: 9,
  public_gists: 0,
  followers: 3,
  following: 1,
  created_at: '2015-08-08T14:50:44Z',
  updated_at: '2016-08-27T05:29:53Z',
};
