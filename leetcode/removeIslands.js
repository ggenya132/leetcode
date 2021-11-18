function removeIslands(matrix) {
  let visited = matrix.map((row) => {
    return row.map((cell) => 0);
  });

  // Write your code here.

  //dfs while keeping track of cells traversed, if recursion ends with bounds colided, return true for all recursive calls.
  //if true returned, mark all cells track

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let currentCell = matrix[i][j];
      if (currentCell == "1") {
        console.log({ i, j });
        console.log("starting");
        if (!visited[i][j]) {
        }
        let islandNeedToBeFlipped = dfs(matrix, i, j);
        console.log({ i, j });
        console.log({ islandNeedToBeFlipped });
      }
    }
  }

  function dfs(arr, i, j, cellsLocallyVisited = []) {
    if (i < 0 || i >= arr.length || j < 0 || j >= arr[i].length) {
      return false;
    }

    let islandNeedsToBeFlipped =
      dfs(arr, i + 1, j, cellsLocallyVisited) &&
      dfs(arr, i - 1, j, cellsLocallyVisited) &&
      dfs(arr, i, j - 1, cellsLocallyVisited) &&
      dfs(arr, i, j + 1, cellsLocallyVisited);

    return islandNeedsToBeFlipped;
  }
}

// Do not edit the line below.
exports.removeIslands = removeIslands;
