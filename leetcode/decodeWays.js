/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] > 0 ? 1 : 0;
  for (let i = 2; i <= s.length; i++) {
    let currentSingleDigit = s.substring(i - 1, i);
    let currentDoubleDigit = s.substring(i - 2, i);
    if (currentSingleDigit >= 1) {
      dp[i] += dp[i - 1];
    }
    if (currentDoubleDigit >= 10 && currentDoubleDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  console.log({ dp });
  return dp.pop();
};

var numDecodingsTopDown = function (s) {
  let mem = {};
  return helper(0, s);
  function helper(i, string) {
    if (mem[i] != undefined) {
      return mem[i];
    }
    if (s[i] == 0) {
      return 0;
    }
    if (i == s.length || i == s.length - 1) {
      return 1;
    }
    let answer = 0;

    let twoDigit = s.substring(i, i + 2);
    answer += helper(i + 1, string);
    if (twoDigit <= 26) {
      answer += helper(i + 2, string);
    }
    return answer;
  }
};
