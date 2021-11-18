/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let prefixSum = { 0: -1 };
  let currentTotal = 0;
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    currentTotal += nums[i];
    if (currentTotal === k) {
      longest = i + 1;
    }
    let neededDiff = currentTotal - k;
    if (prefixSum.hasOwnProperty(neededDiff)) {
      let candidateLongest = i - prefixSum[neededDiff];
      longest = Math.max(longest, candidateLongest);
    }
    if (!prefixSum.hasOwnProperty(currentTotal)) {
      prefixSum[currentTotal] = i;
    }
  }

  return longest;
};
