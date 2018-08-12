// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str === r(str);
}

function r(str) {
  if (typeof str !== "string") {
    return;
  }
  if (str.length === 0) {
    return "";
  } else {
    return r(str.slice(1)) + str.slice(0, 1);
  }
}

module.exports = palindrome;

// function palindrome(str) {
//     const reverse = str
//       .split("")
//       .reverse()
//       .join("");
//     return reverse === str;
//   }

// function palindrome(str) {
//   const rev = str.split("").reduce((acc = "", i) => i + acc);
//   return rev === str;
// }

// function r(str) {
//   if (str.length === 0) {
//     return "";
//   } else {
//     return r(str.slice(1)) + str.slice(0, 1);
//   }
// }
