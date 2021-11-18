/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let edges = [];
  let dj = new Array(points.length).fill(null).map((ignored, index) => index);
  function getRoot(n) {
    if (n !== dj[n]) {
      return (dj[n] = getRoot(dj[n]));
    }
    return n;
  }
  function connect(u, v) {
    const rootV = getRoot(v);
    const rootU = getRoot(u);
    if (rootV !== rootU) {
      dj[rootU] = rootV;
    }
  }

  for (let i = 0; i < points.length; i++) {
    let coordOne = points[i];
    for (let j = i + 1; j < points.length; j++) {
      if (j !== i) {
        let coordTwo = points[j];
        let weight = calculateManhattanDistance(coordOne, coordTwo);
        edges.push([i, j, weight]);
      }
    }
  }
  edges.sort(
    ([xOne, yOne, weightOne], [xTwo, yTwo, weightTwo]) => weightOne - weightTwo
  );
  let cost = 0;
  let totalEdges = 0;
  while (totalEdges < points.length - 1 && edges.length) {
    const [u, v, weight] = edges.shift();
    if (getRoot(v) !== getRoot(u)) {
      connect(u, v);
      totalEdges++;
      cost += weight;
    }
  }
  return cost;
  function calculateManhattanDistance(coordOne, coordTwo) {
    let [xOne, yOne] = coordOne;
    let [xTwo, yTwo] = coordTwo;
    return Math.abs(xOne - xTwo) + Math.abs(yOne - yTwo);
  }
};
