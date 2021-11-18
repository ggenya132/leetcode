/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
  //push wells into pipes
  let numbersOfComponents = n + 1;
  wells.forEach((cost, house) => {
    pipes.push([0, house + 1, cost]);
  });
  pipes.sort(([houseOneA, houseTwoA, costA], [houseOneB, houseTwoB, costB]) => {
    return costA - costB;
  });
  let numberOfEdges = 0;
  let dj = new Array(n + 1).fill(null).map((_ignored, index) => index);
  let totalCost = 0;
  while (numberOfEdges < n + 1) {
    let [houseOne, houseTwo, cost] = pipes.shift();

    if (!isConnected(houseOne, houseTwo)) {
      join(houseOne, houseTwo);
      totalCost += cost;
    }
  }
  return totalCost;
  function getRoot(n) {
    if (dj[n] !== n) {
      return (dj[n] = getRoot(dj[n]));
    }
    return n;
  }
  function isConnected(vertexOne, vertexTwo) {
    return getRoot(vertexOne) == getRoot(vertexTwo);
  }
  function join(vertexOne, vertexTwo) {
    const rootOne = getRoot(vertexOne);
    const rootTwo = getRoot(vertexTwo);
    dj[rootTwo] = rootOne;
    numbersOfComponents--;
  }
};
