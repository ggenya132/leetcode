/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  const al = {};
  edges.forEach(([u, v]) => {
    (al[u] = al[u] || []).push(v);
    (al[v] = al[v] || []).push(u);
  });
  let visited = {};
  return dfs(start);
  function dfs(node) {
    visited[node] = true;
    if (node === end) {
      return true;
    }
    let an = al[node] || [];
    for (let i = 0; i < an.length; i++) {
      if (!visited[an[i]]) {
        const hasPath = dfs(an[i]);
        if (hasPath) {
          return true;
        }
      }
    }

    return false;
  }
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  if (start == end) {
    return true;
  }
  if (!edges.length) {
    return false;
  }
  let al = {};
  edges.forEach(([u, v]) => {
    (al[u] = al[u] || []).push(v);
    (al[v] = al[v] || []).push(u);
  });
  let visited = { [start]: true };
  let q = [start];
  while (q.length) {
    let node = q.shift();
    if (node == end) {
      return true;
    }
    let adjacentNodes = al[node] || [];
    for (let i = 0; i < adjacentNodes.length; i++) {
      if (!visited[adjacentNodes[i]]) {
        visited[adjacentNodes[i]] = true;
        q.push(adjacentNodes[i]);
      }
    }
  }
  return false;
};
