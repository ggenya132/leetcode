/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let results = [];
  let seen = {};
  let edges = {};
  let targetNode = graph.length - 1;
  graph.forEach((nodes, vertex) => {
    edges[vertex] = [...nodes];
  });
  dfs(0);
  return results;
  function dfs(vertex, currentPath = []) {
    if (seen[vertex]) {
      return;
    }
    if (vertex === targetNode) {
      currentPath.push(vertex);
      results.push([...currentPath]);
      currentPath.pop();
      return;
    }

    currentPath.push(vertex);
    seen[vertex] = true;

    let adjacentNodes = edges[vertex];
    adjacentNodes.forEach((node) => {
      dfs(node, currentPath);
    });
    seen[vertex] = false;
    currentPath.pop();
  }
};
