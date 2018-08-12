function palindrome(str) {
  return str === rev(str);
}

function rev(str) {
  return str.length === 0 ? str : rev(str.slice(1)) + str.slice(0, 1);
}

module.exports = palindrome;
