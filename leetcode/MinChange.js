var coinChange = function (coins, amount) {
  let minChange = new Array(amount + 1).fill(Infinity);
  minChange[0] = 0;
  coins.forEach(helper);
  function helper(denom) {
    for (let i = 1; i <= amount; i++) {
      if (denom <= i) {
        minChange[i] = Math.min(minChange[i], minChange[i - denom] + 1);
      }
    }
  }
  return minChange[amount] !== Infinity ? minChange[amount] : -1;
};
