const test = {
  edges: [[1, 2], [2], []],
};

const testA = {
  edges: [[], [0, 2], [0, 3], [0, 4], [0, 5], [0]],
};

function dfs(vertex, edges, stack = [], visited = {}) {
  visited[vertex] = true;
  console.log({ vertex, edges });
  let adjacentNodes = edges[vertex];
  console.log({ adjacentNodes });
  adjacentNodes.forEach((node) => {
    if (!visited[node]) {
      dfs(node, edges, stack, visited);
    }
  });
  stack.push(vertex);
  return stack;
}
const stack = dfs(1, testA.edges);
const topologicalSort = [];
while (stack.length) {
  topologicalSort.push(stack.pop());
}
console.log({ topologicalSort });
