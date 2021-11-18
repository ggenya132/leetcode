/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) {
    return [0];
  }
  const al = {};
  for (let i = 0; i < n; i++) {
    n[i] = [];
  }
  edges.forEach(([u, v]) => {
    (al[u] = al[u] || []).push(v);
    (al[v] = al[v] || []).push(u);
  });
  let q = [];
  for (const key in al) {
    let an = al[key];
    if (an.length < 2) {
      q.push(key);
    }
  }
  let numberOfNodes = n;
  while (numberOfNodes > 2) {
    const qLength = q.length;
    numberOfNodes -= q.length;
    for (let i = 0; i < qLength; i++) {
      let currentNode = q.shift();
      let adjacentNodes = al[currentNode];
      if (adjacentNodes) {
        adjacentNodes.forEach((adjacentNode) => {
          al[adjacentNode] = al[adjacentNode].filter(
            (potentialNode) => potentialNode != currentNode
          );
          if (al[adjacentNode].length == 1) {
            q.push(adjacentNode);
          }
        });
      }
    }
  }
  return q;
};
