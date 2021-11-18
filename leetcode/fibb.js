const fibb = (n) => (n <= 2 ? 1 : fibb(n - 1) + fibb(n - 2));

let fibbWithMem = (n) => {
  const cache = {};
  return (function fibb(n) {
    if (cache[n]) {
      return cache[n];
    }
    if (n <= 2) {
      cache[n] = 1;
      return 1;
    } else {
      let currentFibSequence = fibb(n - 1) + fibb(n - 2);
      cache[n] = currentFibSequence;
      return currentFibSequence;
    }
  })(n);
};
