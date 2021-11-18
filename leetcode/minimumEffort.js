/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  return minimumEffortPathDjykstras(heights);
};

var minimumEffortPathBruteForce = function (heights) {
  let maxRows = heights.length - 1;
  let maxColumns = heights[0].length - 1;
  let leastDistance = Infinity;

  let visited = new Array(heights.length)
    .fill(null)
    .map((ignored) => new Array(maxColumns + 1).fill(false));
  dfs();
  return leastDistance;
  function dfs(cell = [0, 0], maxOnPath = 0) {
    let [row, col] = cell;
    if (maxOnPath >= leastDistance) {
      return;
    }
    if (row === maxRows && col === maxColumns) {
      leastDistance = Math.min(maxOnPath, leastDistance);
    }
    visited[row][col] = true;
    let currentCellValue = heights[row][col];
    const adjacentCelValues = getAdjacentCells([row, col]);
    adjacentCelValues.forEach(([adjacentRow, adjcanentCol]) => {
      if (!visited[adjacentRow][adjcanentCol]) {
        dfs(
          [adjacentRow, adjcanentCol],
          Math.max(
            Math.abs(currentCellValue - heights[adjacentRow][adjcanentCol]),
            maxOnPath
          )
        );
      }
    });
    visited[row][col] = false;
  }
  function getAdjacentCells(cell) {
    let [row, col] = cell;
    let res = [];
    if (row > 0) {
      res.push([row - 1, col]);
    }
    if (row < maxRows) {
      res.push([row + 1, col]);
    }
    if (col < maxColumns) {
      res.push([row, col + 1]);
    }
    if (col > 0) {
      res.push([row, col - 1]);
    }
    return res;
  }
};

var minimumEffortPathDjykstras = function (heights) {
  let maxRows = heights.length - 1;
  let maxColumns = heights[0].length - 1;
  let distances = new Array(heights.length)
    .fill(null)
    .map((i) => new Array(heights[0].length).fill(Infinity));

  let startingCell = [0, 0];
  let q = [[0, 0, 0]];
  distances[0][0] = 0;

  while (q.length) {
    // console.log(q.length)

    let [currentRow, currentCol, maxEffort] = q.shift();
    let currentCellValue = heights[currentRow][currentCol];
    let adjacentCells = getAdjacentCells([currentRow, currentCol]);
    adjacentCells.forEach(([adjacentRow, adjacentCol]) => {
      let adjacentCellValue = heights[adjacentRow][adjacentCol];
      let candidateMaxAbs = Math.abs(adjacentCellValue - currentCellValue);
      let maxEffortCandidate = Math.max(maxEffort, candidateMaxAbs);
      if (maxEffortCandidate < distances[adjacentRow][adjacentCol]) {
        distances[adjacentRow][adjacentCol] = maxEffortCandidate;
        q.push([adjacentRow, adjacentCol, maxEffortCandidate]);
      }
    });
  }
  return distances[maxRows][maxColumns];
  function getAdjacentCells(cell) {
    let [row, col] = cell;
    let res = [];
    if (row > 0) {
      res.push([row - 1, col]);
    }
    if (row < maxRows) {
      res.push([row + 1, col]);
    }
    if (col < maxColumns) {
      res.push([row, col + 1]);
    }
    if (col > 0) {
      res.push([row, col - 1]);
    }
    return res;
  }
};

var minimumEffortPathUnionFind = function (heights) {
  let disjointSet = new Array(heights.length * heights[0].length)
    .fill(null)
    .map((ignored, index) => index);

  let edges = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[i].length; j++) {
      if (j <= heights[i] - 1) {
        let absDiff = Math.abs(heights[i][j] - heights[i][j + 1]);
        let indexOne = getDisjointSetIndex(i, j);
        let indexTwo = getDisjointSetIndex(i, j + 1);
        edges.push([indexOne, indexTwo, absDiff]);
      }
      if (i <= heights.length - 1) {
        let absDiff = Math.abs(heights[i][j] - heights[i + 1][j]);
        let indexOne = getDisjointSetIndex(i, j);
        let indexTwo = getDisjointSetIndex(i, j + 1);
        edges.push([indexOne, indexTwo, absDiff]);
      }
    }
  }
  console.log(edges);
  function getDisjointSetIndex(row, col) {
    return (row + 1) * (col + 1) - 1;
  }
};
