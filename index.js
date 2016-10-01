const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || require('./config').MONGO_URI;

// To ensure a test doesn't interrupt with a currently running server. 
const port = process.env.NODE_ENV === 'test' ? 3001 : process.env.PORT || 3000;
app.set('port', port);
process.env.PWD = process.cwd();

const TARGET = process.env.npm_lifecycle_event;
if (TARGET !== 'devStart') {
  app.use(express.static(path.join(process.env.PWD, 'build')));
} 

const gitAuth = require('./server/github-auth/git-auth-handlers');

gitAuth(app);

const handleRequest = require('./server/handlers');

handleRequest(app);

mongoose.connect(MONGO_URI);
app.listen(port, () => { console.log(`Listening on http://localhost:${port}/`); });

exports = module.exports = app;
