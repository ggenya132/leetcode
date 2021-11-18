/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  function bfs() {
    let start = [[0, 0]];

    return -1;
  }

  function getAdjacentCells(row, col) {
    let results = [];
    if (row > 0) {
      results.push([grid[row - 1][col], [row - 1, col]]);
      results.push([grid[row - 1][col - 1], [row - 1, col - 1]]);
      results.push([grid[row - 1][col + 1], [row - 1, col + 1]]);
    }
    if (row < grid.length - 1) {
      results.push([grid[row + 1][col], [row + 1, col]]);
      results.push([grid[row + 1][col - 1], [row + 1, col - 1]]);
      results.push([grid[row + 1][col + 1], [row + 1, col + 1]]);
    }
    results.push([grid[row][col + 1], [row, col + 1]]);
    results.push([grid[row][col - 1], [row, col - 1]]);
    results = results.filter(([results, coords]) => {
      return results !== 1 && results !== undefined;
    });
  }
};
