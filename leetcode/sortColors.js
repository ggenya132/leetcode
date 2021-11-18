var sortColors = function (nums) {
  let red = 0;
  let white = 1;
  let blue = 2;

  let lastPlacedIndexOfRed = 0;
  let lastPlacedIndexOfBlue = nums.length - 1;
  let lastPlacedIndexOfWhite = 0;

  while (lastPlacedIndexOfWhite <= lastPlacedIndexOfBlue) {
    let currentColor = nums[lastPlacedIndexOfWhite];
    if (currentColor === red) {
      swap(lastPlacedIndexOfWhite, lastPlacedIndexOfRed);
      lastPlacedIndexOfRed++;
      lastPlacedIndexOfWhite++;
    }
    if (currentColor === blue) {
      swap(lastPlacedIndexOfWhite, lastPlacedIndexOfBlue);
      lastPlacedIndexOfBlue--;
    }
    if (currentColor === white) {
      lastPlacedIndexOfWhite++;
    }
  }

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};
