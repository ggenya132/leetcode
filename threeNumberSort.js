function threeNumberSort(arr, order) {
  // Write your code here.

  let first = 0;
  let second = 0;
  let third = arr.length - 1;
  while (second <= third) {
    let currentElement = arr[second];
    if (currentElement === order[1]) {
      second++;
    }
    if (currentElement === order[0]) {
      swap(first, second);
      second++;
      first++;
    }
    if (currentElement === order[2]) {
      swap(third, second);
      third--;
    }
  }
  return arr;
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function threeNumberSort(arr, order) {
  // Write your code here.

  let lastPlacedFirstElement = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement === order[0]) {
      swap(lastPlacedFirstElement, i);
      lastPlacedFirstElement++;
    }
  }
  let lestPlacedLastElement = arr.length - 1;
  for (let i = lestPlacedLastElement; i >= 0; i--) {
    let currentElement = arr[i];
    if (currentElement === order[2]) {
      swap(lestPlacedLastElement, i);
      lestPlacedLastElement--;
    }
  }
  return arr;
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
function threeNumberSort(arr, order) {
  // Write your code here.
  //naive
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = hash[arr[i]] ? hash[arr[i]] + 1 : 1;
  }

  let i = 0;
  order.forEach((item) => {
    while (hash[item] > 0) {
      arr[i] = item;
      hash[item]--;
      i++;
    }
  });
  return arr;
}

// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
