/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    //if the number behind
    if (nums[i - 1] === nums[i]) {
      if (nums[i + 1] !== nums[i]) {
        j++;
        nums[j] = nums[i];
      }
    } else {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

var removeDuplicates = function (nums) {
  let j = (i = 0);
  let currentCount = 1;
  let prevNumber;
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (currentNum == prevNumber) {
      currentCount++;
      if (currentCount <= 2) {
        nums[j] = nums[i];
        j++;
      }
    } else {
      prevNumber = currentNum;
      currentCount = 1;
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
