/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

class DisjointSet {
  constructor(size) {
    this.components = size;
    this.verticies = new Array(size).fill(null).map((_ignored, index) => index);
    this.heights = new Array(size).fill(1);
  }
  find(vertex) {
    if (this.verticies[vertex] !== vertex) {
      return (this.verticies[vertex] = this.find(this.verticies[vertex]));
    }
    return vertex;
  }
  isConnected(vertexOne, vertexTwo) {
    return this.find(vertexOne) === this.find(vertexTwo);
  }
  join(vertexOne, vertexTwo) {
    let rootOne = this.find(vertexOne);
    let rootTwo = this.find(vertexTwo);
    if (rootOne !== rootTwo) {
      this.components--;
      let heightOne = this.heights[rootOne];
      let heightTwo = this.heights[rootTwo];
      if (heightOne > heightTwo) {
        this.verticies[rootTwo] = rootOne;
      } else if (heightTwo > heightOne) {
        this.verticies[rootOne] = rootTwo;
      } else {
        this.verticies[rootTwo] = rootOne;
        this.heights[rootOne]++;
      }
      return true;
    }
    return false;
  }
}

var validTree = function (n, edges) {
  if (edges.length !== n - 1) {
    return false;
  }
  let union = new DisjointSet(n);
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    if (!union.join(a, b)) {
      return false;
    }
  }
  return true;
};
