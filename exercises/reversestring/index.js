// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (str.length === 0) {
    return "";
  } else {
    return reverse(str.slice(1)) + str.slice(0, 1);
  }
}

module.exports = reverse;

// function reverse(str) {
//     let out = str
//       .split("")
//       .reverse()
//       .join("");

//     console.log(out);
//     return out;
//   }

// function reverse(str) {
//     let out = "";

//     for (let i = 0; i < str.length; i++) {
//       out = str[i] + out;
//     }

//     console.log(out);
//     return out;
//   }

// function reverse(str) {
//     let out = str.split("").reduce((acc = "", i) => {
//       return i + acc;
//     });

//     console.log(out);
//     return out;
//   }

// function reverse(str) {
//     let reverse = "";

//     for (let char of str) {
//       reverse = char + reverse;
//     }

//     console.log(reverse);
//     return reverse;
//   }

// function reverse(str) {
//     let out = str.split("").reduce((acc, item) => {
//       return item + acc;
//     }, "");

//     console.log(out);
//     return out;
//   }

// function reverse(str) {
//   if (str.length === 0) {
//     return "";
//   }
//   return reverse(str.slice(1)) + str.slice(0, 1);
// }
