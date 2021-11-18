/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let amountOfMinuts = 0;
  const INDEX_OF_ROTTEN = 2;
  const INDEX_OF_FRESH = 1;
  let amountOfFresh = 0;
  let indexOfRotten = [];
  const visited = new Array(grid.length).fill(null).map((row, index) => {
    return new Array(grid[index].length).fill(false);
  });

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let currentCell = grid[i][j];
      if (currentCell == INDEX_OF_ROTTEN) {
        indexOfRotten.push([i, j]);
      } else if (currentCell == INDEX_OF_FRESH) {
        amountOfFresh++;
      }
    }
  }
  if (amountOfFresh === 0) {
    return 0;
  }

  let res = bfs(indexOfRotten);
  return amountOfFresh === 0 ? res : -1;

  function bfs(rottenOranges) {
    let maxLevel = (startingLevel = -1);
    let q = [];
    rottenOranges.forEach(([row, col]) => {
      q.push([row, col]);
    });
    q.push([-1, -1]);
    while (q.length) {
      let [row, col] = q.shift();

      if (row === -1) {
        maxLevel++;
        if (q.length) {
          q.push([-1, -1]);
        }
      } else {
        const adjacentNonRottenCells = getAdjacentCells(row, col);
        adjacentNonRottenCells.forEach(([row, col]) => {
          amountOfFresh--;
          q.push([row, col]);
          grid[row][col] = 2;
        });
      }
    }

    return maxLevel;
  }
  function getAdjacentCells(row, column) {
    let results = [];
    if (row > 0) {
      if (grid[row - 1][column] === INDEX_OF_FRESH) {
        results.push([row - 1, column]);
      }
    }
    if (row < grid.length - 1) {
      if (grid[row + 1][column] === INDEX_OF_FRESH) {
        results.push([row + 1, column]);
      }
    }
    if (column > 0) {
      if (grid[row][column - 1] === INDEX_OF_FRESH) {
        results.push([row, column - 1]);
      }
    }
    if (column < grid[row].length) {
      if (grid[row][column + 1] === INDEX_OF_FRESH) {
        results.push([row, column + 1]);
      }
    }
    return results;
  }
};
