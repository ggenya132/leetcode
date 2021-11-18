/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // build adjacency list
  let adjacencyList = {};
  let indegreeList = {};
  let queue = [];
  let cost = 0;

  // O(E)
  for (let [vertice, dependency] of prerequisites) {
    adjacencyList[vertice] = adjacencyList[vertice] || [];
    adjacencyList[vertice].push(dependency);
  }

  // once adjacency list is made, create indegree list
  // O(E + V)
  let counter = 0;
  while (counter < numCourses) {
    if (typeof indegreeList[counter] == "undefined") {
      indegreeList[counter] = 0;
    }
    if (adjacencyList[counter]) {
      for (let adj of adjacencyList[counter]) {
        indegreeList[adj] = indegreeList[adj] || 0;
        indegreeList[adj] += 1;
      }
    }
    counter++;
  }

  // Find all inorders 0 and push it in queue
  for (let i in indegreeList) {
    if (indegreeList[i] === 0) {
      queue.push(i);
    }
  }

  //console.log(queue, indegreeList);

  // If no indegree, then it is cyclic
  if (queue.length === 0) return false;

  // traverse queue
  while (queue.length > 0) {
    // pick top element
    let elm = queue.shift();
    cost++;
    // remove its adjacent
    if (adjacencyList[elm]) {
      let counter = 0;
      for (let adj of adjacencyList[elm]) {
        indegreeList[adj] -= 1;
        if (indegreeList[adj] === 0) {
          queue.push(adj);
        }
        counter++;
      }
    }
  }

  return cost === numCourses;
};
