const express = require('express');
const path = require('path');
const handleRequest = require('./server/handlers');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'devStart') {
  app.get('/regex/*', (req, res) => {
    handleRequest(req, res);
  });
} else {
  app.use(express.static(path.join(__dirname, '/build')));
  app.get('/regex/*', (req, res) => {
    handleRequest(req, res);
  });
}


app.listen(port, () => { console.log(` Listening on http://localhost:${port}/`); });
