/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let al = {};
  graph.forEach((edges, index) => {
    al[index] = edges;
  });
  let dest = graph.length - 1;
  let q = [[0, [0]]];
  let results = [];
  while (q.length) {
    let [currentNode, currentPath] = q.shift();
    if (currentNode === dest) {
      results.push(currentPath);
    }
    let adjacentNodes = graph[currentNode];
    if (adjacentNodes) {
      adjacentNodes.forEach((adjacentNode) => {
        q.push([adjacentNode, [...currentPath, adjacentNode]]);
      });
    }
  }
  return results;
};
