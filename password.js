'use strict';

const randomWords = require('random-words');

function generatePassword(req, res) {
  res.json({
    password: randomWords({ exactly: Number(req.params.length), join: '' })
  });
}

module.exports = generatePassword;