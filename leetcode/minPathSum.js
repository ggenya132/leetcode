/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = new Array(grid.length)
    .fill(null)
    .map((i) => new Array(grid[0].length));
  let maxRow = grid.length - 1;
  let maxCol = grid[maxRow].length - 1;
  dfs(0, 0);
  return dp[0][0];
  function dfs(row, col) {
    if (row > maxRow || col > maxCol || row < 0 || col < 0) {
      return Infinity;
    }

    if (dp[row] && dp[row][col]) {
      return dp[row][col];
    }
    if (row === maxRow && col === maxCol) {
      dp[row][col] = grid[row][col];
      return grid[row][col];
    }
    let down = dfs(row + 1, col);
    let right = dfs(row, col + 1);
    let min = Math.min(down, right);
    let res = min + grid[row][col];
    dp[row][col] = res;
    return res;
  }
};

var minPathSumDjykstras = function (grid) {
  let distances = new Array(grid.length)
    .fill(null)
    .map((ignored) => new Array(grid[0].length).fill(Infinity));
  distances[0][0] = grid[0][0];

  let q = [[0, 0, grid[0][0]]];

  while (q.length) {
    let [row, col, weight] = q.shift();
    const adjacentCells = getAdjacentCells(row, col);
    adjacentCells.forEach(([adjacentRow, adjacentCol]) => {
      let candidatePath = grid[adjacentRow][adjacentCol] + weight;
      if (candidatePath < distances[adjacentRow][adjacentCol]) {
        distances[adjacentRow][adjacentCol] = candidatePath;
        q.push([adjacentRow, adjacentCol, candidatePath]);
      }
    });
  }
  function getAdjacentCells(row, col) {
    let res = [];
    if (row < grid.length - 1) {
      res.push([row + 1, col]);
    }
    if (col < grid[0].length - 1) {
      res.push([row, col + 1]);
    }
    return res;
  }
};
