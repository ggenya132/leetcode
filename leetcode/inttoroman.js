/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let hash = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  const result = helper(num);
  console.log({ result });
  function helper(num) {
    for (key in hash) {
      if (Math.floor(num / key) > 0) {
        let numberOfTimesToRepeat = Math.floor(num / key);
        return [hash[key].repeat(numberOfTimesToRepeat), ...helper(num % key)];
      }
    }
  }
};
