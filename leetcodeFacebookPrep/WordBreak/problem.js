/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let canBeSegmented = true;
  wordDict.forEach((word) => {
    if (s.includes(word)) {
      s = s.replaceAll(word, "");
    } else {
      canBeSegmented = false;
    }
  });
  return canBeSegmented;
};
