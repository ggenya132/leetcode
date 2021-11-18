/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let totalCol = board[0].length - 1;
  let totalRow = board.length - 1;
  let visited = board.map((row) => row.map(false));

  function wordIsPresent(word) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let currentCell = board[i][j];
        if (currentCell === word[0] && dfs(j, i, word)) {
          return true;
        }
      }
    }
    return false;
  }

  function dfs(currentCol, currentRow, word) {
    if (!word.length) {
      return true;
    }
    if (
      currentCol > totalCol ||
      currentRow > totalRow ||
      word[0] !== board[currentRow][currentCol] ||
      visited[currentRow][currentCol]
    ) {
      return false;
    }

    visited[currentRow][currentCol] = true;
    let restOfWord = word.slice(1);
    let hasWord =
      dfs(currentCol + 1, currentRow, restOfWord) ||
      dfs(currentCol - 1, currentRow, restOfWord) ||
      dfs(currentCol, currentRow + 1, restOfWord) ||
      dfs(currentCol, currentRow - 1, restOfWord);
  }
};
