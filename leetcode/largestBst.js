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
var largestBSTSubtree = function (root) {
  let max = 0;
  function isBst(root, min = -Infinity, max = Infinity) {
    if (!root) {
      return true;
    }
    return root.val < min || root.val >= max
      ? false
      : isBst(root.left, min, root.val) && isBst(root.right, root.val, max);
  }
  function getLength(root) {
    if (!root) {
      return 0;
    }
    return getLength(root.left) + getLength(root.right) + 1;
  }
  function helper(root) {
    if (!root) {
      return;
    }

    let treeIsBst = isBst(root);
    if (treeIsBst) {
      max = Math.max(getLength(root), max);
    }
    helper(root.left);
    helper(root.right);
  }
  helper(root);

  return max;
};
