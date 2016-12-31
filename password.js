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
  const commonKeyMap = {
    'a' : 4,
    'e' : 3,
    's' : 5,
    'z' : 5,
    'l' : 1,
    'i' : 1
  };

  // no more than 10% of letters can be numbers
  let numbersRemaining = Math.floor(0.10 * str.length);

  let newChars = [];

  for (let i = 0; i < str.length; i += 1) {
    // 50/50 chance of number being swapped for letter
    if (Math.random() > 0.5 && numbersRemaining > 0) {
      // If the letter has an equivilent number
      if (commonKeyMap.hasOwnProperty(str[i].toLowerCase())) {
        newChars.push(String(commonKeyMap[String(str[i].toLowerCase())]));
        numbersRemaining -= 1;
      }
    } else {
      newChars.push(str[i]);
    }
  }

  // If we have not used all the numbers remaining then append that many numbers to the end of the string
  if (numbersRemaining > 0) {
    newChars.push(String(Math.random()).substring(2, (2 + numbersRemaining)));
  }

  return newChars.join('');
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