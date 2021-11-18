/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root, results = [], candidate = "") {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    results.push(`${candidate}${root.val}`);
    return results;
  }

  let newCandidate = `${candidate}${root.val}->`;
  let { left, right } = root;
  if (left) {
    binaryTreePaths(root.left, results, newCandidate);
  }
  if (right) {
    binaryTreePaths(root.right, results, newCandidate);
  }
  return results;
};
