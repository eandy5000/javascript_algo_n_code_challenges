// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const a = stringMapper(stringFormatter(stringA));
  const b = stringMapper(stringFormatter(stringB));

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  return true;
}

function stringMapper(str) {
  const obj = {};

  for (let letter of string) {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }

  return obj;
}

function stringFormatter(str) {
  return str.replace(/\W/);
}

function stringSorter(str) {
  return stringFormatter(str)
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const a = formatString(stringA);
//     const b = formatString(stringB);
//     const aMap = stringMapper(a);
//     const bMap = stringMapper(b);

//     if (a.length !== b.length) {
//       return false;
//     }

//     for (let key in aMap) {
//       if (aMap[key] !== bMap[key]) {
//         return false;
//       }
//     }

//     return true;
//   }

// function anagrams(stringA, stringB) {
//     const aMap = stringMapper(stringA);
//     const bMap = stringMapper(stringB);

//     if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//       return false;
//     }

//     for (let key in aMap) {
//       if (aMap[key] !== bMap[key]) {
//         return false;
//       }
//     }

//     return true;
//   }

// Helpers
// function formatString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase();
// }

// function stringMapper(str) {
//   const cleanedString = formatString(str);
//   let obj = {};

//   for (let char of cleanedString) {
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char]++;
//     }
//   }

//   return obj;
// }
