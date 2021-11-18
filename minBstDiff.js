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
 * @return {number}
 */
var minDiffInBST = function (root, prev) {
  let min = Infinity;
  iot(root);
  return min;

  function iot(root) {
    if (!root) {
      return;
    }

    iot(root.left, root.val);
    if (prev) {
      min = Math.min(min, Math.abs(prev.val - root.val));
    }
    prev = root;
    iot(root.right, root.val);
  }
};
