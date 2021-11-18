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
  let created = {};
  let seen = {};
  let result = deepClone(node);
  return result;
  function deepClone(node) {
    if (!created[node.val]) {
      let newNode = new Node(node.val);
      created[node.val] = newNode;
      for (const neighbor of node.neighbors) {
        newNode.neighbors.push(deepClone(neighbor));
      }
      return newNode;
    } else {
      return created[node.val];
    }
  }
};
