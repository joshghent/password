/* eslint import/prefer-default-export:0 */
const getRandomSpecialChar = () => {
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", ":"];
  return specialChars[Math.floor(Math.random() * specialChars.length)];
};

export default getRandomSpecialChar;
