/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  if (!words.length) {
    return "";
  }
  let adjacenyList = {};
  let edges = [];
  for (const string of words) {
    string.split("").forEach((letter) => {
      if (!adjacenyList[letter]) {
        adjacenyList[letter] = new Set();
      }
    });
  }
  for (let i = 0; i < words.length - 1; i++) {
    let currentWord = words[i];
    let nextWord = words[i + 1];
    let minLength = Math.min(currentWord.length, nextWord.length);
    for (let i = 0; i < minLength; i++) {
      if (
        currentWord.length > nextWord.length &&
        currentWord.startsWith(nextWord)
      ) {
        return "";
      }
      if (currentWord[i] !== nextWord[i]) {
        edges.push([currentWord[i], nextWord[i]]);
        break;
      }
    }
  }

  edges.forEach(addStringToAdjacenyList);
  function addStringToAdjacenyList(edge) {
    let [u, v] = edge;
    (adjacenyList[u] = adjacenyList[u] || new Set()).add(v);
  }
  let stack = [];
  let visited = {};
  let res = [];
  for (const key in adjacenyList) {
    if (!visited[key]) {
      const hasCycle = dfs(key);
      if (hasCycle) {
        return "";
      }
    }
  }
  let string = "";
  while (res.length) {
    string += res.pop();
  }
  return string;
  function dfs(node, nodesInStack = {}) {
    visited[node] = true;
    nodesInStack[node] = true;
    let adjacentNodes = adjacenyList[node];
    if (adjacentNodes) {
      for (const adjacentNode of adjacentNodes) {
        if (!visited[adjacentNode]) {
          const hasCycle = dfs(adjacentNode, nodesInStack);
          if (hasCycle) {
            return true;
          }
        } else {
          if (nodesInStack[adjacentNode]) {
            return true;
          }
        }
      }
    }
    res.push(node);
    nodesInStack[node] = false;
    return false;
  }
};
