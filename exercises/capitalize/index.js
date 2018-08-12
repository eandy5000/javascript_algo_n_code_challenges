// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] !== " ") {
      capStr += str[i].toLowerCase();
    } else {
      capStr += str[i].toUpperCase();
    }
  }
  return capStr[0].toUpperCase() + capStr.slice(1);
}
capitalize("look, it is working!");
module.exports = capitalize;

// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(" ")) {
//       const firstLetter = word[0].toUpperCase();
//       words.push(firstLetter + word.slice(1));
//     }

//     return words.join(" ");
//   }
