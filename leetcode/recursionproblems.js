// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  console.log(arr);
  let product = 1;
  const helper = (element) => {
    console.log(element);
    if (!isNaN(element)) {
      product *= element;
      helper(arr.shift());
    }
  };
  helper(arr.shift());
  return product;
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArrayPure(arr) {
  if (arr.length > 1) {
    return arr[0] * productOfArrayPure(arr.slice(1));
  } else {
    return arr[0];
  }
}

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function reverse(string) {
  if (string.length > 1) {
    return (
      string.substring(string.length - 1, string.length) +
      reverse(string.substring(0, string.length - 1))
    );
  } else {
    return string;
  }
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length > 1) {
    return cb(arr[0]) || someRecursive(arr.slice(1), cb);
  } else {
    return cb(arr[0]);
  }
}
