/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) {
    return -1;
  }
  return bfs();

  function bfs() {
    let visited = new Array(grid.length)
      .fill(null)
      .map((_ignored) => new Array(grid.length).fill(false));
    let start = [[0, 0], 1];
    let q = [start];
    while (q.length) {
      let [[row, col], distanceTraveled] = q.shift();
      if (row === grid.length - 1 && col === grid.length - 1) {
        return distanceTraveled;
      }
      let adjacentCells = getAdjacentCells(row, col);
      adjacentCells.forEach(([row, col]) => {
        if (!visited[row][col]) {
          visited[row][col] = true;
          q.push([[row, col], distanceTraveled + 1]);
        }
      });
    }
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
    d.map(([results, coords]) => coords);
    return results;
  }
};
