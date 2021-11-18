/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  class Tri {
    constructor() {
      this.root = {};
    }
    buildTri(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        if (!node[currentLetter]) {
          node[currentLetter] = {};
        }
        node = node[currentLetter];
      }
      node["*"] = true;
    }
    contains(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        if (!node[currentLetter]) {
          return { containsWord: false, isComplete: false };
        }
        node = node[currentLetter];
      }
      return node["*"]
        ? { containsWord: true, isComplete: true }
        : { containsWord: true, isComplete: false };
    }
  }

  let wordSearchTri = new Tri();
  words.forEach((word) => wordSearchTri.buildTri(word));
  let visited = board.map((row) => row.map((row) => false));
  let numberOfRows = board.length;
  let numberOfColumns = board[0].length;
  let foundWords = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let currentCell = board[i][j];
      if (wordSearchTri.contains(currentCell)) {
        dfs(i, j);
      }
    }
  }

  return Object.keys(foundWords);
  function dfs(row, column, currentWord = "") {
    if (
      row == numberOfRows ||
      column == numberOfColumns ||
      row < 0 ||
      column < 0 ||
      visited[row][column]
    ) {
      return false;
    }
    visited[row][column] = true;

    currentWord = `${currentWord}${board[row][column]}`;
    let { isComplete, containsWord } = wordSearchTri.contains(currentWord);
    if (containsWord) {
      if (isComplete && !foundWords[currentWord]) {
        foundWords[currentWord] = true;
      }

      dfs(row + 1, column, currentWord);
      dfs(row - 1, column, currentWord);
      dfs(row, column + 1, currentWord);
      dfs(row, column - 1, currentWord);
    }
    visited[row][column] = false;
  }
};
