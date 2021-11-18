/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  for (const num of nums1) {
    map[num] = true;
  }
  nums2.forEach((num, index) => {
    if (map[num]) {
      map[num] = index;
    }
  });

  return nums1.map((num) => {
    let originalIndex = map[num];
    for (let i = originalIndex + 1; i < nums2.length; i++) {
      let current = nums2[i];
      if (current > num) {
        return current;
      }
    }
    return -1;
  });

  return test;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let hash = {};
  for (const num of nums2) {
    while (num > stack[stack.length - 1]) {
      hash[stack.pop()] = num;
    }
    stack.push(num);
  }
  return nums1.map((number) =>
    hash.hasOwnProperty(number) ? hash[number] : -1
  );
};

//monotonic stack
//https://labuladong.gitbook.io/algo-en/ii.-data-structure/monotonicstack
//https://medium.com/techtofreedom/algorithms-for-interview-2-monotonic-stack-462251689da8
