class QuickFind {
  constructor(size) {
    this.verticies = new Array(size).fill(null).map((_ignored, index) => index);
  }
  find(vertex) {
    return this.verticies[vertex];
  }
  join(vertexOne, vertexTwo) {
    let rootOne = this.find(vertexOne);
    let rootTwo = this.find(vertexTwo);
    if (rootOne !== rootTwo) {
      this.verticies.forEach((rootNode, index) => {
        if (rootNode == rootTwo) {
          verticies[index] = rootOne;
        }
      });
    }
  }
  isConnected(vertexOne, vertexTwo) {
    let rootOne = this.find(vertexOne);
    let rootTwo = this.find(vertexTwo);
    return rootOne == rootTwo;
  }
}

class QuickJoin {
  constructor(size) {
    this.parents = size;
    this.verticies = new Array(size).fill(null).map((_ignored, index) => index);
  }
  find(vertex) {
    let currentParentNode = this.verticies[vertex];
    if (currentParentNode !== vertex) {
      return this.find(currentParentNode);
    }
    return vertex;
  }
  join(vertexOne, vertexTwo) {
    let rootOne = this.find(vertexOne);
    let rootTwo = this.find(vertexTwo);
    if (rootOne !== rootTwo) {
      this.parents--;
      this.verticies[rootOne] = rootTwo;
    }
  }
  isConnected(vertexOne, vertexTwo) {
    let rootOne = this.find(vertexOne);
    let rootTwo = this.find(vertexTwo);

    return rootOne == rootTwo;
  }
}
class QuickJoinRank {
  constructor(size) {
    this.components = size;
    this.verticies = new Array(size).fill(null).map((_ignored, index) => index);
    // default to 1, since all verticies have a height of one, initially
    this.heights = new Array(size).fill(1);
  }
  find(vertex) {
    if (this.verticies[vertex] !== vertex) {
      return this.find(this.verticies[vertex]);
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

class QuickJoinRankPathCompression {
  constructor(size) {
    this.components = size;
    this.verticies = new Array(size).fill(null).map((_ignored, index) => index);
    // default to 1, since all verticies have a height of one, initially
    this.heights = new Array(size).fill(1);
  }
  find(vertex) {
    if (this.verticies[vertex] !== vertex) {
      return (verticies[vertex] = this.find(this.verticies[vertex]));
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
        //attach root two to root one
        this.verticies[rootTwo] = rootOne;
      } else if (heightTwo > heightOne) {
        //attach root one to root two
        this.verticies[rootOne] = rootTwo;
      } else {
        //pick either but increment height
        this.verticies[rootTwo] = rootOne;
        this.heights[rootOne]++;
      }
    }
  }
}
