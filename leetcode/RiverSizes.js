function riverSizes(matrix) {
  // Write your code here.
  let riverSize = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let currentElement = matrix[i][j];
      console.log({ currentElement });
      if (currentElement === "1") {
        let totalSizeOfRiver = dfs(matrix, i, j);
        console.log({ totalSizeOfRiver });
      }
    }
  }
  function dfs(arr, i, j, totalSizeOfRiver = 0) {
    console.log("in dfs");
    if (
      i < 0 ||
      i >= arr.length ||
      j < 0 ||
      j >= arr[i].length ||
      arr[i][j] === "0"
    ) {
      return totalSizeOfRiver;
    }
    totalSizeOfRiver += 1;

    //avoid recounting river
    arr[i][j] = "0";
    //up
    totalSizeOfRiver += dfs(arr, i - 1, j, totalSizeOfRiver);
    //down
    totalSizeOfRiver += dfs(arr, i + 1, j, totalSizeOfRiver);
    //right
    totalSizeOfRiver += dfs(arr, i, j + 1, totalSizeOfRiver);
    //left
    totalSizeOfRiver += dfs(arr, i, j - 1, totalSizeOfRiver);
    return totalSizeOfRiver;
  }
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
