/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//optimize with sliding window
var checkInclusion = function (s1, s2) {
  let substringLength = s1.length;
  let s1Hash = getHash(s1);
  for (let i = 0; i <= s2.length - substringLength; i++) {
    let currentSub = s2.substring(i, i + substringLength);
    let hash = getHash(currentSub);
    let countsAreEquals = getCountsAreEqual(hash, s1Hash);
    if (countsAreEquals) {
      return true;
    }
  }
  return false;

  function getCountsAreEqual(substringHash, s1Hash) {
    for (key in s1Hash) {
      if (!substringHash[key] || substringHash[key] < s1Hash[key]) {
        return false;
      }
    }
    return true;
  }

  function getHash(string) {
    return string.split("").reduce((acc, next) => {
      acc[next] = acc[next] ? acc[next] + 1 : 1;
      return acc;
    }, {});
  }
};
