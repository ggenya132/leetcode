/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//bottom up
//this one says for every integer up to target, try each denom\
//this is different from num ways to make change because
//you only consider each denom/num once for each denom, see if you can make target
//here for every int, you consider every num
var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp.pop();
};

var combinationSum4 = function (nums, target) {
  let mem = {};
  function getMaxCombinationFor(target, nums) {
    if (mem[target]) {
      return mem[target];
    }
    if (target == 1 || target == 0) {
      return 1;
    }
    let res = 0;
    for (const num of nums) {
      if (target - num >= 0) {
        res += getMaxCombinationFor(num, nums);
      }
    }
    mem[target] = res;
  }
};
