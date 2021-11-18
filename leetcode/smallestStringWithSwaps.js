/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  let disjointSet = s.split("").map((_ignored, index) => index);

  function findRoot(vertex) {
    if (disjointSet[vertex] !== vertex) {
      return (disjointSet[vertex] = findRoot(disjointSet[vertex]));
    }
    return vertex;
  }
  function join(vertexOne, vertexTwo) {
    disjointSet[findRoot(vertexTwo)] = findRoot(vertexOne);
  }
  pairs.forEach(([vertexOne, vertexTwo]) => {
    join(vertexOne, vertexTwo);
  });
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let root = findRoot(i);
    (map[root] = map[root] || []).push(i);
  }
  for (root in map) {
    let nodesInComponent = [...map[root]];
    nodesInComponent = nodesInComponent.sort((nodeOne, nodeTwo) => {
      let letterOne = s[nodeOne];
      let letterTwo = s[nodeTwo];
      return letterOne < letterTwo ? -1 : 1;
    });
    map[root] = nodesInComponent;
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let root = findRoot(i);
    let values = map[root];
    res += s[values.shift()];
  }
  return res;
};
