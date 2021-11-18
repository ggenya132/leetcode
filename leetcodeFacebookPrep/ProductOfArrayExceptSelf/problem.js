/**
 * @param {number[]} nums
 * @return {number[]}

 */

//V1 O(n^2)
var productExceptSelf = function (nums) {
  const getProductFromArray = (indexToExclude, arr) => {
    return arr.reduce((acc, next, index) => {
      if (index === indexToExclude) {
        return acc * 1;
      }
      return acc * next;
    }, 1);
  };

  return nums.map((_ignored, index, arr) => getProductFromArray(index, arr));
};


// ALTERNATE SOLUTION 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = Array(nums.length);
    let productFromLeft = 1, productFromRight = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = productFromLeft;
        productFromLeft *= nums[i];
    }
    for (let j = nums.length-1; j >= 0; j--) {
        output[j] *= productFromRight; 
        productFromRight *= nums[j];
    }
    return output;
	// Time Complexity: O(N)
    // Space Complexity: O(1)
};