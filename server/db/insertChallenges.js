const fs = require('fs');
const path = require('path');
const handlers = require('./dbQueryHandler');
const Tutorial = require('./dbmodel').Tutorial;
const MONGO_URI = require('../../config').MONGO_URI;
const mongoose = require('mongoose');
// Below is to fix deprecated mongoose promise.
mongoose.Promise = global.Promise;
const db = mongoose.connect(MONGO_URI);

const addEntries = (data) => {
  data.forEach((tutorial) => {
    tutorial._id = mongoose.Types.ObjectId();
    const NewTutorial = new Tutorial(tutorial);
    NewTutorial.save((err, newData) => {
      if (err) throw err;
    });
  });
};

fs.readFile(path.join(__dirname, 'tutorial.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  Tutorial.remove({}, (err) => {
    if (err) throw err;
    addEntries(parsedData);
  });
});
