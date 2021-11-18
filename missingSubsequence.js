function findKthMissingSequence(nums, k) {
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let currentElement = nums[i];
    let difference = currentElement - prev - 1;
    console.log({ difference });
    if (difference > 0) {
      if (difference >= k) {
        return prev + k;
      }
      k -= difference;
    }
    prev = nums[i];
  }
}

let nums = [-3, -2, -1, 2, 3];
let n = findKthMissingSequence(nums, 2);
console.log({ n });

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositiveWrong = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    let currentElement = arr[middle];
    let elementsPositionInTheArray = middle;
    //if there are no missing numbers, this will be zero
    //however, if there are missing numbers, missing numbers will be
    //element value minus it's position in the array - 1
    //to compensate for zero indexing
    let potentialAmountOfMissingElement =
      currentElement - elementsPositionInTheArray - 1;
    if (potentialAmountOfMissingElement < k) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left + k;
};

findKthPositiveWrong([1, 2, 3, 6], 2);
[1, 2, 3, 4];
2;

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let currentElement = arr[middle];
    let elementsPositionInTheArray = middle;
    //if there are no missing numbers, this will be zero
    //however, if there are missing numbers, missing numbers will be
    //element value minus it's position in the array - 1
    //to compensate for zero indexing
    let potentialAmountOfMissingElement =
      currentElement - elementsPositionInTheArray - 1;
    if (potentialAmountOfMissingElement < k) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left + k;
};
