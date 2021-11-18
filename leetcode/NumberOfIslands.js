/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  //Sanity check;
  if (!grid || !grid.length) {
    return 0;
  }
  let numberOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      //kick off dfs if it's an island
      if (grid[i][j] === "1") {
        numberOfIslands += dfs(grid, i, j);
      }
    }
  }
  function dfs(arr, i, j) {
    //base case, not an island or we've reached the end
    if (
      i < 0 ||
      i >= arr.length ||
      j < 0 ||
      j >= arr[i].length ||
      arr[i][j] === "0"
    ) {
      return;
    }
    arr[i][j] = "0";
    //down
    dfs(arr, i + 1, j);
    //up
    dfs(arr, i - 1, j);
    //right ;
    dfs(arr, i, j + 1);
    //left
    dfs(arr, i, j - 1);
    return 1;
  }
  return numberOfIslands;
};
