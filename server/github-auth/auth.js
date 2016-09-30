const GithubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../server/db/dbmodel').Users;

const verifyUserExistence = require('../db/userHandlers').verifyUserExistence;

module.exports = () => {
  passport.use(new GithubStrategy({
    clientID: process.env.GITHUBID || require('../../config').GITHUB.github.clientID,
    clientSecret: process.env.GITHUBSECRET || require('../../config').GITHUB.github.clientSecret,
    callbackURL: process.env.URL || require('../../config').GITHUB.github.callbackURL,
  }, (accessToken, refreshToken, profile, cb) => {
      profile = Object.assign({}, profile, { accessToken, refreshToken });
      verifyUserExistence(profile, (user) => {
        cb(null, user);
      })
    }
  ));
};
