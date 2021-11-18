/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const freq = candidates.reduce((acc, next) => {
    acc[next] = acc[next] ? acc[next] + 1 : 1;
    return acc;
  }, {});
  const freqCounter = [];
  for (const key in freq) {
    freqCounter.push([parseInt(key), freq[key]]);
  }
  return backtrack(0, freqCounter);
  function backtrack(
    index = 0,
    counter = [],
    currentSum = 0,
    res = [],
    combination = []
  ) {
    if (currentSum > target) {
      return;
    }
    if (currentSum == target) {
      res.push([...combination]);
      return;
    }
    for (let i = index; i < counter.length; i++) {
      const [candidate, freq] = counter[i];
      if (freq < 1) {
        continue;
      }
      let newSum = currentSum + candidate;
      counter[i] = [candidate, freq - 1];
      combination.push(candidate);
      backtrack(i, counter, newSum, res, combination);
      combination.pop();
      counter[i] = [candidate, freq];
    }
    return res;
  }
};
