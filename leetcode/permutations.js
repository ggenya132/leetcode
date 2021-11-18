//naive O(n^2 * n!)
function permuteAString(str) {
  let allPermutations = [];
  let call = 0;
  function helper(str, currentPermutation = "") {
    if (!str.length) {
      console.log({ currentPermutation });
      allPermutations.push(currentPermutation);
    } else {
      for (let i = 0; i < str.length; i++) {
        let stringWithoutCurrentChar = str.substr(0, i) + str.substr(i + 1);
        let newPermutation = currentPermutation + str[i];
        //this is wrong causethe previous letter added on will carry over in the iteration
        //currentPermutation += str[i];
        helper(stringWithoutCurrentChar, newPermutation);
      }
    }
  }

  helper(str);
  console.log({ call });
  console.log({ allPermutations });
  return allPermutations;
}
permuteAString("abc");

//well call helper function n times for every letter, then n

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const allPermutations = [];
  function helper(nums, currentPermutation = []) {
    if (!nums.length) {
      allPermutations.push(currentPermutation);
    } else {
      for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let numsWithoutCurrentNum = [...nums.slice(0, i), ...nums.slice(i + 1)];
        let updatedPermutation = [...currentPermutation, currentNum];
        helper(numsWithoutCurrentNum, updatedPermutation);
      }
    }
  }
  helper(nums);
  return allPermutations;
};
