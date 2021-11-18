/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  let adjacenyList = new Array(n).fill(null).map((_ignored) => []);
  edges.forEach(([a1, b1]) => {
    adjacenyList[a1].push(b1);
    adjacenyList[b1].push(a1);
  });
  let parents = { 0: -1 };

  let q = [0];

  while (q.length) {
    let currentVertex = q.pop();
    let neighbors = adjacenyList[currentVertex];
    for (let i = 0; i < neighbors.length; i++) {
      let currentNeighbor = neighbors[i];
      if (
        parents.hasOwnProperty(currentVertex) &&
        parents[currentVertex] === currentNeighbor
      ) {
        continue;
      }
      if (parents.hasOwnProperty(currentNeighbor)) {
        return false;
      }
      parents[currentNeighbor] = currentVertex;
      q.push(currentNeighbor);
    }
  }
  return Object.keys(parents).length === n;
};
