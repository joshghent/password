/* eslint import/prefer-default-export:0 */
export const addNumbersToString = str => {
  const newChars = [];
  const commonKeyMap = {
    a: 4,
    e: 3,
    s: 5,
    z: 5,
    l: 1,
    i: 1
  };

  // no more than 10% of letters can be numbers
  let numbersRemaining = Math.floor(0.1 * str.length);

  for (let i = 0; i < str.length; i += 1) {
    // 50/50 chance of number being swapped for letter
    if (Math.random() > 0.5 && numbersRemaining > 0) {
      // If the letter has an equivilent number
      const eqNumber = Object.prototype.hasOwnProperty.call(
        commonKeyMap,
        str[i].toLowerCase()
      );

      if (eqNumber) {
        newChars.push(String(commonKeyMap[String(str[i].toLowerCase())]));
        numbersRemaining -= 1;
      }
    } else {
      newChars.push(str[i]);
    }
  }

  // If we have not used all the numbers remaining then append that many numbers to the end of the string
  if (numbersRemaining > 0) {
    newChars.push(String(Math.random()).substring(2, 2 + numbersRemaining));
  }

  return newChars.join("");
};
