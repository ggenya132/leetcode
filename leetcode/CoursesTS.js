/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let edges = new Array(numCourses).fill(1).map((i) => []);
  prerequisites.forEach(([course, preReq]) => {
    edges[preReq].push(course);
  });
  // Write your code here.

  let numberOfNodes = edges.length;
  let visited = {};
  for (let i = 0; i < numberOfNodes; i++) {
    if (visited[i]) {
      continue;
    }
    let hasCycle = dfs(i);
    if (hasCycle) {
      return false;
    }
  }
  return true;

  function dfs(vertex, currentlyInStack = {}) {
    visited[vertex] = true;
    currentlyInStack[vertex] = true;

    let adjacentNodes = edges[vertex];
    for (node of adjacentNodes) {
      if (!visited[node]) {
        let hasCycle = dfs(node, currentlyInStack);
        if (hasCycle) {
          return true;
        }
      } else if (currentlyInStack[node]) {
        return true;
      }
    }
    currentlyInStack[vertex] = false;
    return false;
  }
};
