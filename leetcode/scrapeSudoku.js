function solveSudoku(board) {
  // Write your code here.

  solvePartialSudoku(0, 0, board);
  return board;
  function solvePartialSudoku(row = 0, col = 0, board) {
    let currentCol = col;
    let currentRow = row;
    //we've finished solving for current row
    if (currentCol === 9) {
      currentCol = 0;
      currentRow++;
      if (currentRow === 9) {
        return true;
      }
    }
    let currentCell = board[currentRow][currentCol];
    if (currentCell === 0) {
      //place cell
      return tryPlacingNumbers(currentRow, currentCol, board);
    }
    //move on from current pre-filled cell
    return solvePartialSudoku(currentRow, currentCol + 1, board);
  }

  function tryPlacingNumbers(row, col, board) {
    for (let i = 1; i <= 9; i++) {
      if (isValidAtPosition(i, row, col, board)) {
        board[row][col] = i;
        if (solvePartialSudoku(row, col + 1, board)) {
          return true;
        }
      }
    }
    board[row][col] = 0;
    return false;
  }

  function isValidAtPosition(value, row, col, board) {
    const rowIsValid = !board[row].includes(value);
    let columnIsValid = !board.map((row) => row[col]).includes(value);

    if (!rowIsValid || !columnIsValid) {
      return false;
    }

    let startingRow = Math.floor(row / 3) * 3;
    let startingColumn = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let currentSquareValue = board[startingRow + i][startingColumn + j];
        if (currentSquareValue === value) {
          return false;
        }
      }
    }
    return true;
  }
}

function chunkArrayIntoNineByNine(array) {
  let newArray = [];
  let clone = [...array];
  while (clone.length) {
    let currentSubArray = [];
    for (let i = 0; i < 9; i++) {
      currentSubArray.push(clone.shift());
    }
    newArray.push(currentSubArray);
    currentSubArray = [];
  }
  return newArray;
}
let input = [...document.querySelectorAll("#puzzle_grid td")].map((node) => {
  let input = node.children[0];
  let value = input.value;
  if (value.length) {
    return parseInt(value);
  }
  return 0;
});
let inFormat = chunkArrayIntoNineByNine(input);
let solved = solveSudoku(inFormat).flat();
[...document.querySelectorAll("#puzzle_grid td")].forEach((node, index) => {
  let input = node.children[0];
  input.value = solved[index];
});
