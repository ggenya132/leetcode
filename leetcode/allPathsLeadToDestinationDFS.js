/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
  const al = {};
  edges.forEach(([u, v]) => {
    (al[u] = al[u] || []).push(v);
  });
  let visited = {};
  const test = dfs(source);
  return test;
  function dfs(node, nodesInStack = {}) {
    let adjacentNodes = al[node];
    nodesInStack[node] = true;
    if (!adjacentNodes) {
      nodesInStack[node] = false;
      if (node === destination) {
        return true;
      } else {
        return false;
      }
    } else {
      for (let i = 0; i < adjacentNodes.length; i++) {
        let currentAdjacentNode = adjacentNodes[i];
        if (!nodesInStack[currentAdjacentNode]) {
          const allPathLeadToDest = dfs(currentAdjacentNode, nodesInStack);
          if (!allPathLeadToDest) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    nodesInStack[node] = false;
    return true;
  }
};
