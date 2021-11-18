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
  return clone(node);
  function clone(node, hash = {}) {
    if (hash[node.val]) {
      return hash[node.val];
    }
    let clonedNode = new Node(node.val);
    hash[node.val] = clonedNode;
    node.neighbors.forEach((node) => {
      clonedNode.neighbors.push(clone(node), hash);
    });
    return clonedNode;
  }
};
