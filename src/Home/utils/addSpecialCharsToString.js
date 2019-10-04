/* eslint import/prefer-default-export:0 */
export const addSpecialCharsToString = str => {
  const newChars = [];
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", ":"];
  let specialCharsRemaining = Math.floor(0.05 * str.length);

  if (specialCharsRemaining === 0) {
    specialCharsRemaining = 1;
  }

  for (let i = 0; i < str.length; i += 1) {
    newChars.push(str[i]);
  }

  if (specialCharsRemaining > 0) {
    const randomSpecChar =
      specialChars[Math.floor(Math.random() * specialChars.length)];
    newChars.push(randomSpecChar);
  }

  return newChars.join("");
};
