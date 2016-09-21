const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const MONGO_URI = require('./config').MONGO_URI;

const app = express();
const handleRequest = require('./server/handlers').GET(app);

const port = process.env.PORT || 3000;

app.set('port', port);
process.env.PWD = process.cwd();

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'devStart') {
  app.get('/regex/*', (req, res) => {
    handleRequest(req, res);
  });
} else {
  app.use(express.static(path.join(process.env.PWD, 'build')));
}

mongoose.connect(MONGO_URI);

app.listen(port, () => { console.log(`Listening on http://localhost:${port}/`); });
