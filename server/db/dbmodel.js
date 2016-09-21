const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const challengeSchema = new Schema({
  _id: ObjectId,
  order: Number,
  name: String,
  description: String,
  author: String,
  difficulty: String,
  testCases: [
    {
      case: String,
      result: String,
      task: String,
      expectation: Boolean
    }
  ],
  testPassed: Boolean
});

const Challenge = mongoose.model('Challenges', challengeSchema);
module.exports = Challenge;

// insert function
  // _id: ObjectId(),
  // name: 'blalblah',
  // ...
