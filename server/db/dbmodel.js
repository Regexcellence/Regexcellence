const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tutorialSchema = new Schema({
  _id: ObjectId,
  order: Number,
  name: String,
  nameurl: String,
  description: String,
  author: String,
  difficulty: Number,
  testCases: [
    {
      case: String,
      expectation: Boolean,
    },
  ],
  answers: {
    explanation: String,
    answer: String
  }
});

const challengeSchema = new Schema({
  _id: ObjectId,
  name: String,
  nameurl: String,
  description: String,
  author: String,
  authorId: String,
  difficulty: Number,
  testCases: [
    {
      case: String,
      expectation: Boolean,
    },
  ],
  answers: [
    {
      answer: String,
      user: String,
      userId: String
    }
  ]
});

const userSchema = new Schema({
  _id: ObjectId,
  gitHandle: {
    type: String,
    required: true
  },
  githubId: Number,
  accessToken: String,
  refreshToken: String,
  name: String,
  created: Date,
  avatar_url: String,
  authored_challenges: [],
  completed_challenges: [],
  tutorial_progress: String,
});

const Users = mongoose.model('Users', userSchema);
const Challenges = mongoose.model('Challenges', challengeSchema);
const Tutorial = mongoose.model('Tutorial', tutorialSchema);

module.exports = { Challenges, Tutorial, Users };

// insert function
  // _id: ObjectId(),
  // name: 'blalblah',
  // ...
