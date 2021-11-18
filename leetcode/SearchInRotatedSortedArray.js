/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  if (target <= nums[nums.length - 1]) {
    right = nums.length - 1;
  } else {
    right = left - 1;
    left = 0;
  }
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[left] === target ? left : -1;
};
