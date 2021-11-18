var ladderLength = function (beginWord, endWord, wordList) {
  // building connections.
  // i.e) *ot: [hot, dot, lot], h*t: [hot], ...
  let adjacentWordsMap = {};
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let newWord = word.substring(0, i) + "*" + word.substring(i + 1);
      if (!adjacentWordsMap[newWord]) {
        adjacentWordsMap[newWord] = [];
      }
      adjacentWordsMap[newWord].push(word);
    }
  }

  // BFS
  let queue = [[beginWord, 1]];
  let visited = { [beginWord]: true };
  while (queue.length !== 0) {
    let [word, level] = queue.shift();
    for (let i = 0; i < word.length; i++) {
      let newWord = word.substring(0, i) + "*" + word.substring(i + 1);
      let adjacentWords = adjacentWordsMap[newWord];
      if (adjacentWords) {
        for (let item of adjacentWords) {
          if (item === endWord) {
            return level + 1;
          }
          if (!visited[item]) {
            visited[item] = true;
            queue.push([item, level + 1]);
          }
        }
      }
    }
  }

  // not found, return 0
  return 0;
};
