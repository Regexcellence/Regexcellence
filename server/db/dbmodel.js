const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const multiUseSchema = new Schema({
  _id: ObjectId,
  order: Number,
  name: String,
  nameurl: String,
  description: String,
  author: String,
  difficulty: String,
  testCases: [
    {
      case: String,
      expectation: Boolean,
    },
  ],
});

const userSchema = new Schema({
  githubId: Number,
  accessToken: String,
  refreshToken: String,
  name: String,
  created: Date,
  company: String,
  blog: String,
  location: String,
  bio: String,
  html_url: String,
  avatar_url: String,
});

const Users = mongoose.model('Users', userSchema);
const Challenges = mongoose.model('Challenges', multiUseSchema);
const Tutorial = mongoose.model('Tutorial', multiUseSchema);

module.exports = { Challenges, Tutorial, Users };

// insert function
  // _id: ObjectId(),
  // name: 'blalblah',
  // ...
