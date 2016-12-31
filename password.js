'use strict';

const randomWords = require('random-words');

function randomizeCasing (str) {
  // Create a new array that will store the new string
  // This was because reassigning the invidividual string chars triggered an error
  let newChars = [];
  for (let i = 0; i < str.length; i += 1) {
    if (Math.random() > 0.5) {
      newChars.push(str[i].toUpperCase());
    } else {
      newChars.push(str[i]);
    }
  }

  return newChars.join('');
}

function addNumbersToString (str) {
  return str;
}

function addSpecialCharsToString (str) {
  return str;
}

function generatePassword(req, res) {
  let password = randomWords({ exactly: Number(req.params.length) }).join('');

  if (req.query.mixCasing === 'true') {
    password = randomizeCasing(password);
  }

  if (req.query.includeNumbers === 'true') {
    password = addNumbersToString(password);
  }

  if (req.query.includeSpecialChars === 'true') {
    password = addSpecialCharsToString(password);
  }

  res.json({
    password: password
  });
}

module.exports = generatePassword;