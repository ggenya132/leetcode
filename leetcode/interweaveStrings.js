function interweavingStrings(one, two, three) {
  // Write your code here.
  let cache = new Array(one.length + 1)
    .fill(0)
    .map((_) => new Array(two.length + 1).fill(null));

  return one.length + two.length !== three.length
    ? false
    : helper(one, two, three, 0, 0, cache);

  function helper(one, two, three, i = 0, j = 0) {
    console.log({ i, j });
    let pointerOfInterweavedString = i + j;
    if (pointerOfInterweavedString === three.length) {
      return true;
    }

    if (cache[i][j]) {
      console.log("cache hit");
      return cache[i][j];
    }
    let isInterweavedOne = false;
    if (i < one.length && three[pointerOfInterweavedString] === one[i]) {
      isInterweavedOne = helper(one, two, three, i + 1, j, cache);
      cache[i][j] = isInterweavedOne;
    }
    let isInterweavedTwo = false;
    if (j < two.length && three[pointerOfInterweavedString] === two[j]) {
      isInterweavedTwo = helper(one, two, three, i, j + 1, cache);
      cache[i][j] = isInterweavedTwo;
    }
    return isInterweavedOne || isInterweavedTwo;
  }
}

// Do not edit the line below.
exports.interweavingStrings = interweavingStrings;
