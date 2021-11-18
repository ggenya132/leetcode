var productExceptSelf = function (nums) {
  let productsThatComeBeforeIndex = [];
  let productsThatComeAfterIndex = [];
  productsThatComeBeforeIndex[0] = 1;
  productsThatComeAfterIndex[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    productsThatComeBeforeIndex[i] =
      productsThatComeBeforeIndex[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    productsThatComeAfterIndex[i] =
      productsThatComeAfterIndex[i + 1] * nums[i + 1];
  }

  let results = [];
  for (let i = 0; i < nums.length; i++) {
    results[i] = productsThatComeBeforeIndex[i] * productsThatComeAfterIndex[i];
  }
  return results;
};

//unideal
productExceptSelf = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let currentProduct = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      currentProduct *= nums[j];
    }
    result.push(currentProduct);
  }
};
