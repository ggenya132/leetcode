/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
  let foundFirst = false;
  let amount = 0;
  let min = Infinity;
  let prev;
  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] == word1 || wordsDict[i] == word2) {
      if (foundFirst && prev != wordsDict[i]) {
        min = Math.min(amount, min);
        amount = 0;
        prev = wordsDict[i];
      } else if (foundFirst) {
        amount = 0;
      } else {
        foundFirst = true;
        prev = wordsDict[i];
      }
    }
    if (foundFirst) {
      amount++;
    }
  }
  return min;
};
