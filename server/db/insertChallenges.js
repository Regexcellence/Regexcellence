const fs = require('fs');
const path = require('path');
const handlers = require('./dbQueryHandler');
const Challenge = require('./dbmodel').Challenge;
const MONGO_URI = require('../../config').MONGO_URI;
const mongoose = require('mongoose');
// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const db = mongoose.connect(MONGO_URI);

const addEntries = (data) => {
  data.forEach((challenge) => {
    challenge._id = mongoose.Types.ObjectId();
    const NewChallenge = new Challenge(challenge);
    NewChallenge.save((err, newData) => {
      if (err) throw err;
    });
  });
};

fs.readFile(path.join(__dirname, 'challenges.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  Challenge.remove({}, (err) => {
    if (err) throw err;
    addEntries(parsedData);
  });
});
