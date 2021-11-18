/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n)
var longestConsecutive = function (nums) {
  let hash = nums.reduce((acc, next) => {
    acc[next] = acc[next] ? acc[next] + 1 : 1;
    return acc;
  }, {});
  let longest = 0;
  for (let key in hash) {
    let currentLongest = 1;
    let currentKey = key;
    if (!hash[parseInt(currentKey) - 1]) {
      while (hash[parseInt(currentKey) + 1]) {
        currentKey = parseInt(currentKey) + 1;
        currentLongest++;
      }
    }

    longest = Math.max(longest, currentLongest);
  }
  return longest;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let deepest = {};
  let visited = {};
  for (const num of nums) {
    deepest[num] = null;
    visited[num] = false;
  }
  let longest = 0;
  for (const num of nums) {
    if (visited[num] == false) {
      const longestPossibleSeq = deepestHelper(num);
      longest = Math.max(longestPossibleSeq, longest);
    }
  }
  return longest;
  function deepestHelper(num, current = 1) {
    visited[num] = true;
    let nextNode = num + 1;
    if (visited.hasOwnProperty(nextNode)) {
      if (!visited[nextNode]) {
        const deepestSequence = deepestHelper(nextNode, current + 1);
        deepest[num] = deepestSequence;
        return deepestSequence;
      } else {
        const deepestSequence = current + deepest[nextNode];
        deepest[num] = deepestSequence;
        return deepestSequence;
      }
    }
    deepest[num] = current;
    return current;
  }
};
