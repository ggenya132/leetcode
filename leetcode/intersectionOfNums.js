/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) {
    return [];
  }
  let left = nums1.sort((a, b) => a - b);
  let right = nums2.sort((a, b) => a - b);

  let res = [];
  let l = (r = 0);
  while (left[l] != undefined && right[r] != undefined) {
    let currentLeft = left[l];
    let currentRight = right[r];
    if (currentLeft == currentRight) {
      res.push(currentLeft);
      while (currentLeft == left[l]) {
        l++;
      }
      while (currentRight == right[r]) {
        r++;
      }
      continue;
    }
    if (currentLeft > currentRight) {
      while (currentRight == right[r]) {
        r++;
      }
    } else {
      while (currentLeft == left[l]) {
        l++;
      }
    }
  }
  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) {
    return [];
  }
  let has = nums1.reduce((acc, next) => {
    acc[next] = true;
    return acc;
  }, {});
  let added = { 0: false };
  return nums2.filter((num) => {
    if (has[num] && !added[num]) {
      added[num] = true;
      return true;
    }
  });
};
