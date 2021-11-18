/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = (j = 0);
  for (num of nums) {
    //if num is NOT to be removed, we clone to earlier pointer, and return           //first i elements (cloned elements)
    if (num !== val) {
      nums[i] = num;
      i++;
    }
    j++;
  }
  return i;
};
