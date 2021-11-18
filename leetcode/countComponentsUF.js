/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  let components = n;
  let dj = new Array(n).fill(null).map((ignored, i) => i);
  edges.forEach(([u, v]) => connect(u, v));
  return components;
  function findRoot(n) {
    if (dj[n] !== n) {
      return (dj[n] = findRoot(dj[n]));
    }
    return n;
  }
  function connect(u, v) {
    const rootU = findRoot(u);
    const rootV = findRoot(v);
    if (rootU !== rootV) {
      dj[rootV] = rootU;
      components--;
    }
  }
};
