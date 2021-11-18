/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
class QuickJoin {
  constructor(size) {
    this.components = size;
    this.verticies = new Array(size).fill(null).map((_ignored, index) => index);
    // default to 1, since all verticies have a height of one, initially
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
    }
  }
}

var earliestAcq = function (logs, n) {
  logs = logs.sort(
    (
      [timeStampA, ignoredOneA, ignoredTwoA],
      [timeStampB, ignoredOneB, ignoredTwoB]
    ) => timeStampA - timeStampB
  );

  let qj = new QuickJoin(n);
  for (log of logs) {
    let [time, a, b] = log;
    qj.join(a, b);
    if (qj.components === 1) {
      return time;
    }
  }
  return -1;
};
