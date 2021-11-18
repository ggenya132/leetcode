/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;
  //must use <= here in case missing k missing number is not within array,
  //this feels very unusual since this follows a 'deferred detection' approach of BS
  //but uses the <= to allow left to potentially exit array bounds
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
