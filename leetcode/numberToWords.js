/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  let to19 = [
    null,
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  let dozens = [
    null,
    null,
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  let map = {
    "10e8": "Billion",
    "10e5": "Million",
    "10e2": "Thousand",
    "10e1": "Hundred",
  };
  const test = helper(num).join(" ");
  return test.length ? test : "Zero";

  function helper(num) {
    if (num === 0) {
      return [];
    }
    if (num <= 19) {
      return [to19[num]];
    }
    if (num < 100) {
      return [dozens[Math.trunc(num / 10)], ...helper(num % 10)];
    }
    for (const key of Object.keys(map)) {
      if (Math.trunc(num / key) > 0) {
        return [
          ...helper(Math.trunc(num / key)),
          map[key],
          ...helper(num % key),
        ];
      }
    }
  }
};
