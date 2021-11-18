var moveZeroes = function (nums) {
  let indexToPlaceNextNonZeroNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[indexToPlaceNextNonZeroNumber] = nums[i];
      indexToPlaceNextNonZeroNumber++;
    }
  }
  let indexWhereToStartAddingZeros = indexToPlaceNextNonZeroNumber;

  for (let i = indexWhereToStartAddingZeros; i < nums.length; i++) {
    nums.push(0);
  }
};
