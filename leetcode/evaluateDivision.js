/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let adjacenyList = {};
  let dj = {};

  equations.forEach(([u, v], index) => {
    if (!dj[u]) {
      dj[u] = u;
    }
    if (!dj[v]) {
      dj[v] = v;
    }
    (adjacenyList[u] = adjacenyList[u] || []).push([v, values[index]]);
    (adjacenyList[v] = adjacenyList[v] || []).push([u, 1 / values[index]]);
    join(u, v);
  });

  let res = queries.map(([u, v]) => {
    if (
      dj[u] !== undefined &&
      dj[v] !== undefined &&
      getRoot(u) == getRoot(v)
    ) {
      return getValue(u, v);
    }
    return -1.0;
  });
  return res;

  function getValue(from, to) {
    //console.log({from,to})
    let value;
    let visited = {};
    dfs(from);
    return value;
    function dfs(node, currentValue = 1) {
      if (node === to) {
        value = currentValue;
        return;
      }
      visited[node] = true;
      const adjacentNodes = adjacenyList[node];
      adjacentNodes.forEach(([adjacentNode, weight]) => {
        if (!visited[adjacentNode]) {
          dfs(adjacentNode, currentValue * weight);
        }
      });
    }
  }

  function join(u, v) {
    // console.log({u,v})
    let rootU = getRoot(u);
    let rootV = getRoot(v);
    if (rootU !== rootV) {
      dj[rootV] = rootU;
    }
  }
  function getRoot(n) {
    if (dj[n] !== n) {
      return (dj[n] = getRoot(dj[n]));
    }
    return n;
  }
};
