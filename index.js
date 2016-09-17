const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const handleRequest = require('./server/handlers');
const Challenges = require('./server/dbmodel');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);
process.env.PWD = process.cwd()

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'devStart') {
  app.get('/regex/*', (req, res) => {
    handleRequest(req, res);
  });
} else {
	app.use(express.static(path.join(process.env.PWD, 'build')))
  app.get('/regex/*', (req, res) => {
    handleRequest(req, res);
  });
}

mongoose.connect('mongodb://teamUser:regOrDie@ds147975.mlab.com:47975/db_reg');

app.listen(port, () => { console.log(` Listening on http://localhost:${port}/`); });
