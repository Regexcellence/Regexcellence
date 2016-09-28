const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const handlers = require('../dbQueryHandler');
const Challenges = require('../dbmodel').Challenges;
const MONGO_URI = require('../../../config').MONGO_URI;
const parseChallengeName = require('../../utils').parseChallengeName;

// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const db = mongoose.connect(MONGO_URI);

const addEntries = (data) => {
  data.forEach((challenge) => {
    challenge._id = mongoose.Types.ObjectId();
    challenge.nameurl = parseChallengeName(challenge.name);
    const NewChallenge = new Challenges(challenge);
    NewChallenge.save((err, newData) => {
      if (err) throw err;
    });
  });
};

fs.readFile(path.join(__dirname, '../challenges.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  Challenges.remove({}, (err) => {
    if (err) throw err;
    addEntries(parsedData);
  });
});
