var findOrder = function (numCourses, prerequisites) {
  let adjacenyList = new Array(numCourses).fill(0).map((i) => []);

  prerequisites.forEach(([a, b]) => {
    adjacenyList[b].push(a);
  });

  let seen = {};
  let topologicalSort = [];
  for (let i = 0; i < adjacenyList.length; i++) {
    if (!seen[i]) {
      let hasCycle = dfs(i);
      if (hasCycle) {
        return [];
      }
    }
  }

  let results = [];

  while (topologicalSort.length) {
    results.push(topologicalSort.pop());
  }
         let currentAdjacentNode = adjacentNodes[i];
      if (!seen[currentAdjacentNode]) {
        let hasCycle = dfs(currentAdjacentNode, currentlyInStack);
        if (hasCycle) {
          return true;
        }
      } else {
        if (currentlyInStack[currentAdjacentNode]) {
          return true;
        }
      }
    }
    currentlyInStack[      v    ] = false;
    topologicalSort.push(vertex);
    return false;
  }
};
