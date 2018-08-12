// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = 0;
  let charMax = "";
  const obj = {};

  for (let char of str) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }

  for (let item in obj) {
    if (obj[item] > count) {
      count = obj[item];
      charMax = item;
    }
  }

  return charMax;
}

module.exports = maxChar;

// function maxChar(str) {
//   let test = {};
//   let max = 0;
//   let mostChar = "";

//   for (let char of str) {
//     !test[char] ? (test[char] = 1) : (test[char] = test[char] + 1);
//   }

//   for (let key in test) {
//     if (test[key] > max) {
//       max = test[key];
//       mostChar = key;
//     }
//   }

//   return mostChar;
// }
