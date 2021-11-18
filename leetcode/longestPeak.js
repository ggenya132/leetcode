/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let longest = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let currentElement = arr[i];
    let isPeak = arr[i - 1] < currentElement && currentElement > arr[i + 1];
    if (isPeak) {
      let left = i - 1;
      let right = i + 1;
      while (left - 1 >= 0 && arr[left - 1] < arr[left]) {
        left--;
      }
      while (right + 1 < arr.length && arr[right + 1] < arr[right]) {
        right++;
      }
      longest = Math.max(right - left + 1, longest);
    }
  }
  return longest;
};
