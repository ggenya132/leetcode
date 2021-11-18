/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(null).map((ignored) => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      let leftCell = 0;
      let aboveCell = 0;
      if (j > 0) {
        leftCell = dp[i][j - 1];
      }
      if (i > 0) {
        aboveCell = dp[i - 1][j];
      }
      dp[i][j] = leftCell + aboveCell;
    }
  }
  return dp.pop().pop();
};
