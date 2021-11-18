/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let arr = new Array(nums.length);
  arr.fill(false);
  arr[nums.length - 1] = true;

  function numberCanGetToEnd(index, jump) {
    for (let i = 1; i <= jump; i++) {
      if (index + i > nums.length - 1) {
        return false;
      }
      if (arr[index + i] == true) {
        return true;
      }
    }
    return false;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    arr[i] = numberCanGetToEnd(i, nums[i]);
  }
  return arr.shift();
};
