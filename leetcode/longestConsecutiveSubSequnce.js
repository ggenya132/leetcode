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
