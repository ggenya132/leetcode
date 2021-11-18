/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let totalColumns = board[0].length - 1;
  let visited = board.map((row) => row.map((letter) => false));

  let totalRows = board.length - 1;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let currentCell = board[i][j];
      if (currentCell === word[0] && i == 1 && j == 1) {
        console.log("bingo");
      }
      if (currentCell === word[0] && dfs(word, j, i, board)) {
        return true;
      }
    }
  }

  function dfs(word, currentCol, currentRow, board) {
    if (!word.length) {
      return true;
    }
    if (
      currentCol > totalColumns ||
      currentCol < 0 ||
      currentRow > totalRows ||
      currentRow < 0 ||
      visited[currentRow][currentCol]
    ) {
      return false;
    }
    visited[currentRow][currentCol] = true;
    let currentLetterInCell = board[currentRow][currentCol];
    if (currentLetterInCell === word[0]) {
      if (
        dfs(word.slice(1), currentCol + 1, currentRow, board) ||
        dfs(word.slice(1), currentCol, currentRow + 1, board) ||
        dfs(word.slice(1), currentCol, currentRow - 1, board) ||
        dfs(word.slice(1), currentCol - 1, currentRow, board)
      ) {
        return true;
      } else {
        visited[currentRow][currentCol] = false;
      }
    } else {
      visited[currentRow][currentCol] = false;
      return false;
    }
  }
  return false;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//REFACTORED
var exist = function (board, word) {
  let totalColumns = board[0].length - 1;
  let visited = board.map((row) => row.map((letter) => false));

  let totalRows = board.length - 1;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let currentCell = board[i][j];
      if (currentCell === word[0] && dfs(word, j, i, board)) {
        return true;
      }
    }
  }
  return false;

  function dfs(word, currentCol, currentRow, board) {
    if (!word.length) {
      return true;
    }
    if (
      currentCol > totalColumns ||
      currentCol < 0 ||
      currentRow > totalRows ||
      currentRow < 0 ||
      visited[currentRow][currentCol] ||
      word[0] !== board[currentRow][currentCol]
    ) {
      return false;
    }
    visited[currentRow][currentCol] = true;

    let restOfWord = word.slice(1);
    let found =
      dfs(restOfWord, currentCol + 1, currentRow, board) ||
      dfs(restOfWord, currentCol, currentRow + 1, board) ||
      dfs(restOfWord, currentCol, currentRow - 1, board) ||
      dfs(restOfWord, currentCol - 1, currentRow, board);

    visited[currentRow][currentCol] = false;
    return found;
  }
};
