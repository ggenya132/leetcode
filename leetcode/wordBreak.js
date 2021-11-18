/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const q = [0];
  const visited = { 0: true };

  while (q.length) {
    let index = q.shift();
    if (index == s.length) {
      return true;
    }
    wordDict.forEach((word) => {
      let wordLength = word.length;
      let comparableSubString = s.substring(index, index + wordLength);

      //console.log({comparableSubString, word})
      if (comparableSubString == word && !visited[index + wordLength]) {
        visited[index + wordLength] = true;
        q.push(index + wordLength);
      }
    });
  }
  return false;
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let mem = new Array(s.length).fill(undefined);
  wordBreakHelper(0);
  console.log(mem);
  function wordBreakHelper(index) {
    console.log({ index });
    if (index == s.length) {
      mem[index] = true;
      return true;
    }
    if (mem[index] != undefined) {
      return mem[index];
    }

    for (let i = index + 1; i <= s.length; i++) {
      let currentWord = s.substring(index, i);
      wordDict.forEach((word) => {
        if (currentWord == word) {
          wordBreakHelper(i);
          if (mem[i]) {
            return (mem[index] = true);
          }
        }
      });
    }
    if (!mem[index]) {
      return (mem[index] = false);
    }
  }
  return mem[0];
};
