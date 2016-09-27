const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URL || require('./config').MONGO_URI;

const port = process.env.PORT || 3000;
app.set('port', port);
process.env.PWD = process.cwd();

const TARGET = process.env.npm_lifecycle_event;
if (TARGET !== 'devStart') {
  app.use(express.static(path.join(process.env.PWD, 'build')));
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
}); 

const gitAuth = require('./server/github-auth/git-auth-handlers');

gitAuth(app);

const handleRequest = require('./server/handlers');

handleRequest(app);

mongoose.connect(MONGO_URI);
app.listen(port, () => { console.log(`Listening on http://localhost:${port}/`); });
