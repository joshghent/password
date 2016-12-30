'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = Number(process.env.PORT || 6969);
const http = require('http').Server(app);
const api = require('./password.js');

app.use(express.static(path.join(__dirname, 'client')));

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

// Route API calls to the api
app.use('/:length', api);

// Start skynet
http.listen(port, () => {
  console.log('Listening on: ' + port);
});

module.exports = app;