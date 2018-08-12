// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
function memo(fn) {
  const cache = {};
  return function(...args) {
    console.log("cache ", cache);

    if (cache[args]) {
      return cache[args];
    } else {
      const out = fn.apply(this, args);
      cache[args] = out;
      return out;
    }
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

fib = memo(fib);

module.exports = fib;

// console.log(fib(40));

// function fib(n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const oneBack = arr[i - 1];
//     const twoBack = arr[i - 2];
//     arr.push(oneBack + twoBack);
//   }

//   return arr[n];
// }
