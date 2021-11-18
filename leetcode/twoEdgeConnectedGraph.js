function twoEdgeConnectedGraph(edges) {
  // Write your code here.
  if (!edges.length) {
    return true;
  }
  if (!edges.length) {
    return false;
  }
  let visited = {};
  initialDfs(0);
  for (let i = 0; i < edges.length; i++) {
    if (!visited[i]) {
      return false;
    }
  }
  const arrivalTime = {};
  visited = {};
  const order = {};
  const lowest = {};
  const from = {};
  for (let i = 0; i < edges.length; i++) {
    order[i] = null;
    lowest[i] = null;
  }

  let currentArrival = 0;
  let isTwoEdge = true;

  const test = getLatestArrivalTime(0);
  console.log(isTwoEdge);

  function getLatestArrivalTime(node) {
    console.log(node);
    order[node] = currentArrival;
    lowest[node] = currentArrival;
    currentArrival++;
    visited[node] = true;
    let adjacentEdges = edges[node];
    adjacentEdges.forEach((adjacentNode) => {
      if (!visited[adjacentNode]) {
        from[adjacentNode] = node;
        getLatestArrivalTime(adjacentNode);
        const orderOfCurrentNode = order[node];
        const lowestOfAdjacentNode = lowest[adjacentNode];
        const lowestOfCurrentNode = lowest[node];
        console.log({ orderOfCurrentNode, lowestOfAdjacentNode });
        lowest[node] = Math.min(lowestOfCurrentNode, lowestOfAdjacentNode);
        if (lowestOfAdjacentNode > orderOfCurrentNode) {
          isTwoEdge = false;
        }
      } else {
        if (adjacentNode !== from[node]) {
          //console.log({node,adjacentNode})
          lowest[node] = Math.min(lowest[node], order[adjacentNode]);
          //console.log({currentLow:lowest[node]})
        }
      }
    });
  }
  function initialDfs(node) {
    visited[node] = true;
    let adjacentEdges = edges[node];
    adjacentEdges.forEach((adjacentNode) => {
      if (!visited[adjacentNode]) {
        initialDfs(adjacentNode);
      }
    });
  }

  return isTwoEdge;
}

// Do not edit the line below.
exports.twoEdgeConnectedGraph = twoEdgeConnectedGraph;
