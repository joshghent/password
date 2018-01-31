'use strict';

const express = require('express');
const path = require('path');
require('dotenv').config()
const app = express();
const port = Number(process.env.PORT || 6969);
const http = require('http').Server(app);
const api = require('./password.js');
const Rollbar = require('rollbar');
const rollbar = new Rollbar('');

app.use(express.static(path.join(__dirname, 'client')));
app.use(rollbar.errorHandler());

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

// Route API calls to the api
app.use('/:length', api);

// Start skynet
http.listen(port, () => {
	rollbar.info('Test');
	console.log('Listening on: ' + port);
});

module.exports = app;
