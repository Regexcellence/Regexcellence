const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Challenges = require('./server/db/dbmodel');

const app = express();
const handleRequest = require('./server/handlers')(app);

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
}

mongoose.connect('mongodb://teamUser:regOrDie@ds147975.mlab.com:47975/db_reg');

app.listen(port, () => { console.log(`Listening on http://localhost:${port}/`); });
