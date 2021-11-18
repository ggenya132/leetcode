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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  return deleteValues(root);

  function nodeIsLeaf(node) {
    return !node.left && !node.right;
  }
  function deleteValues(node, prev, isLeft = false, isRight = false) {
    if (!node) {
      return;
    }
    if (nodeIsLeaf(node) && node.val === target) {
      if (isLeft) {
        prev.left = null;
      }
      if (isRight) {
        prev.right = null;
      }
      return null;
    }

    deleteValues(node.left, node, true, false);
    deleteValues(node.right, node, false, true);

    if (nodeIsLeaf(node) && node.val === target) {
      if (isLeft) {
        prev.left = null;
      }
      if (isRight) {
        prev.right = null;
      }
      return null;
    }
    return node;
  }
};
