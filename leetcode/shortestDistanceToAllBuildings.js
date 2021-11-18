/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  const houses = {};
  let test = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let current = grid[i][j];
      if (current == 1) {
        test++;
      }
    }
  }
  console.log({ test });
  const numberOfHouses = Object.keys(houses).length;
  let minCoords = [];
  let minDistance = Infinity;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let current = grid[i][j];
      if (current == 0) {
        const [canVisitAlHoues, distance] = canVisitAll(i, j);
        // console.log({distance})
        if (canVisitAlHoues) {
          minDistance = Math.min(minDistance, distance);
        }
      }
    }
  }

  return minDistance == Infinity ? -1 : minDistance;

  function canVisitAll(row, col) {
    let visited = {};
    let numberOfHousesVisited = 0;

    let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    let q = [[row, col, 0]];
    let totalSteps = 0;

    visited[`${row}${col}`] = true;

    while (q.length && numberOfHousesVisited != numberOfHouses) {
      let [row, col, steps] = q.shift();
      console.log(grid[row][col]);
      if (grid[row][col] == 1) {
        console.log("hello");
        numberOfHousesVisited++;
        totalSteps += steps;
        continue;
      }
      for (let i = 0; i < directions.length; i++) {
        let [y, x] = directions[i];
        let newRow = row + y;
        let newCol = col + x;
        if (
          grid[newRow] != undefined &&
          (grid[newRow][newCol] == 0 || grid[newRow][newCol] == 1) &&
          !visited[`${newRow}${newCol}`]
        ) {
          visited[`${newRow}${newCol}`] = true;
          q.push([newRow, newCol, steps + 1]);
        }
      }
    }

    return [numberOfHousesVisited == test, totalSteps];
  }
};
