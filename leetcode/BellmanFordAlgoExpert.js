function bellmanFord(start, edges) {
  // Write your code here.
  let numberOfNodes = edges.length;
  let current = new Array(numberOfNodes).fill(Infinity);
  let prev = new Array(numberOfNodes).fill(Infinity);
  current[start] = 0;
  prev[start] = 0;
  for (let i = 0; i < numberOfNodes - 1; i++) {
    edges.forEach((adjacentNodes, from) => {
      adjacentNodes.forEach(([to, weight]) => {
        if (prev[from] < Infinity) {
          current[to] = Math.min(current[to], prev[from] + weight);
        }
      });
    });
    prev = [...current];
  }
  return current.map((val) => (val !== Infinity ? val : -1));
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
