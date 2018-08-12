// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const nStringed = n.toString();

  const out = r(nStringed);

  return parseInt(out) * Math.sign(n);
}

module.exports = reverseInt;

function r(str) {
  if (typeof str !== "string") return;
  if (str.length === 0) {
    return "";
  } else {
    return r(str.slice(1)) + str.slice(0, 1);
  }
}

// function reverseInt(n) {
//   const str = n.toString();
//   const revStr = r(str);
//   const int = parseInt(revStr);

//   return int * Math.sign(n);
// }
