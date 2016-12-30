'use strict';

const randomWords = require('random-words');

function generatePassword(req, res) {
  console.log(req.params.length, req.length);
  console.log(randomWords(req.params.length));
  console.log(randomWords({ exactly: Number(req.params.length) }));
  res.json({
    password: randomWords({ exactly: Number(req.params.length), join: '' })
  });
}

module.exports = generatePassword;