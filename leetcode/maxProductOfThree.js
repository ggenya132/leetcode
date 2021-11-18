var maximumProduct = function (nums) {
  let maxOne = (maxTwo = maxThree = -Infinity);
  let minOne = (minTwo = Infinity);

  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];
    if (currentElement <= minOne) {
      minTwo = minOne;
      minOne = currentElement;
    } else if (currentElement <= minTwo) {
      minTwo = currentElement;
    }

    if (currentElement >= maxOne) {
      maxThree = maxTwo;
      maxTwo = maxOne;
      maxOne = currentElement;
    } else if (currentElement >= maxTwo) {
      maxThree = maxTwo;
      maxTwo = currentElement;
    } else if (currentElement > maxThree) {
      maxThree = currentElement;
    }
  }
  let max = Math.max(minOne * minTwo * maxOne, maxOne * maxTwo * maxThree);
  return max;
};
