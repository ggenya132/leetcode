/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null;
  }
  let hash = {};
  let clonedNode = new Node(node.val);
  hash[clonedNode.val] = clonedNode;
  let original = clonedNode;
  let visited = { [node.val]: true };
  let q = [node];
  let level = 0;
  while (q.length) {
    let currentNode = q.shift();
    let clonedNode = hash[currentNode.val];
    let neighbors = currentNode.neighbors;
    neighbors.forEach((neighbor) => {
      clonedNode.neighbors.push(addNode(neighbor));
      if (!visited[neighbor.val]) {
        visited[neighbor.val] = true;
        q.push(neighbor);
      }
    });
  }
  function addNode(node) {
    if (hash.hasOwnProperty(node.val)) {
      return hash[node.val];
    } else {
      let clonedNode = new Node(node.val);
      hash[node.val] = clonedNode;
      return clonedNode;
    }
  }
  return clonedNode;
};
