/* eslint import/prefer-default-export:0 */
export const randomizeCase = str => {
  const newChars = [];
  for (let i = 0; i < str.length; i += 1) {
    if (Math.random() > 0.5) {
      newChars.push(str[i].toUpperCase());
    } else {
      newChars.push(str[i]);
    }
  }

  return newChars.join("");
};
