let adjacencyList = [[2, 4, 5], [4, 5], [3, 4], [], [5], []];

function depthFirstSearchTraversal(adjacencyList) {
  const visited = {};
  const numberOfNodes = adjacencyList.length;

  for (let currentNode = 0; currentNode < numberOfNodes; currentNode++) {
    if (!visited[currentNode]) {
      depthFirstSearch(currentNode, adjacencyList, visited, console.log);
    }
  }
}

function depthFirstSearch(vertex, adjacencyList, visited, callback) {
  visited[vertex] = true;
  callback(vertex);
  let adjacentNodes = adjacencyList[vertex];
  adjacentNodes.forEach((adjacentNode) => {
    if (!visited[adjacentNode]) {
      depthFirstSearch(adjacentNode, adjacencyList, visited, callback);
    }
  });
}

//depthFirstSearchTraversal(adjacencyList);

function depthFirstTraversal(vertex, adjacencyList, visited, callback) {
  visited[vertex] = true;
  callback(vertex);
  let adjacentNodes = adjacencyList[vertex];
  adjacentNodes.forEach((adjacentNode) => {
    if (!visited[adjacentNode]) {
      depthFirstTraversal(adjacentNode, adjacencyList, visited, callback);
    }
  });
}

//depthFirstSearchTraversal(adjacencyList, {});

function breadthFirstTraversal(vertex, adjacencyList, visited, callback) {
  let queue = [vertex];
  visited[vertex] = true;

  while (queue.length) {
    let currentNode = queue.shift();
    callback(currentNode);

    let adjacentNodes = adjacencyList[currentNode];
    adjacentNodes.forEach((adjacentNode) => {
      if (!visited[adjacentNode]) {
        visited[adjacentNode] = true;
        queue.push(adjacentNode);
      }
    });
  }
}

breadthFirstTraversal(0, adjacencyList, {}, console.log);
