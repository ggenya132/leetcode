/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  if (!connections.length || n == 0) {
    return null;
  }
  let edges = {};
  connections.forEach(([u, v]) => {
    (edges[u] = edges[u] || []).push(v);
    (edges[v] = edges[v] || []).push(u);
  });

  let parentNodes = {};
  let discoveryOfNodes = {};
  let lowestDiscoveredAccessibleNode = {};
  let visited = {};
  let orderOfDiscovery = 0;
  let res = [];
  getBridgeNodes(0);
  return res;
  function getBridgeNodes(node) {
    visited[node] = true;
    discoveryOfNodes[node] = orderOfDiscovery;
    lowestDiscoveredAccessibleNode[node] = orderOfDiscovery;
    orderOfDiscovery++;
    let adjacdentNodes = edges[node];
    if (adjacdentNodes) {
      adjacdentNodes.forEach((adjacdentNode) => {
        if (!visited[adjacdentNode]) {
          parentNodes[adjacdentNode] = node;
          getBridgeNodes(adjacdentNode);
          lowestDiscoveredAccessibleNode[node] = Math.min(
            lowestDiscoveredAccessibleNode[node],
            lowestDiscoveredAccessibleNode[adjacdentNode]
          );
          if (
            lowestDiscoveredAccessibleNode[adjacdentNode] >
            discoveryOfNodes[node]
          ) {
            res.push([node, adjacdentNode]);
          }
        } else {
          if (parentNodes[node] != adjacdentNode) {
            lowestDiscoveredAccessibleNode[node] = Math.min(
              lowestDiscoveredAccessibleNode[node],
              lowestDiscoveredAccessibleNode[adjacdentNode]
            );
          }
        }
      });
    }
  }
};

//leverages tarjan's algo

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
///use tarjans
var criticalConnections = function (n, connections) {
  if (!connections.length || n == 0) {
    return null;
  }
  let edges = {};
  connections.forEach(([u, v]) => {
    (edges[u] = edges[u] || []).push(v);
    (edges[v] = edges[v] || []).push(u);
  });

  let parentNodes = {};
  let discoveryOfNodes = {};
  let lowestDiscoveredAccessibleNode = {};
  let visited = {};
  let orderOfDiscovery = 0;
  let res = [];
  getBridgeNodes(0);
  return res;
  function getBridgeNodes(node) {
    visited[node] = true;
    discoveryOfNodes[node] = lowestDiscoveredAccessibleNode[node] =
      orderOfDiscovery++;

    let adjacdentNodes = edges[node];

    adjacdentNodes.forEach((adjacdentNode) => {
      if (!visited[adjacdentNode]) {
        parentNodes[adjacdentNode] = node;
        getBridgeNodes(adjacdentNode);
        lowestDiscoveredAccessibleNode[node] = Math.min(
          lowestDiscoveredAccessibleNode[node],
          lowestDiscoveredAccessibleNode[adjacdentNode]
        );
        if (
          lowestDiscoveredAccessibleNode[adjacdentNode] > discoveryOfNodes[node]
        ) {
          res.push([node, adjacdentNode]);
        }
      } else {
        if (parentNodes[node] != adjacdentNode) {
          lowestDiscoveredAccessibleNode[node] = Math.min(
            lowestDiscoveredAccessibleNode[node],
            lowestDiscoveredAccessibleNode[adjacdentNode]
          );
        }
      }
    });
  }
};
