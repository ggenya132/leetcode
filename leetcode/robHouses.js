/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let mem = new Array(nums.length).fill(-Infinity);

  return robFrom(0, nums);
  function robFrom(i, nums) {
    if (i >= nums.length) {
      return 0;
    } else if (mem[i] > -Infinity) {
      return mem[i];
    } else {
      return (mem[i] = Math.max(
        nums[i] + robFrom(i + 2, nums),
        robFrom(i + 1, nums)
      ));
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length == 1) {
    return nums.pop();
  }
  let mem = nums.slice();
  mem[0] = nums[0];
  mem[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    mem[i] = Math.max(nums[i] + mem[i - 2], mem[i - 1]);
  }
  return mem.pop();
};
