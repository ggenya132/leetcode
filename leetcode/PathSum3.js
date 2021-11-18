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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  return helper(root);

  function helper(node) {
    if (!node) {
      return 0;
    }

    let root = getTotalFromRoot(node);
    let left = helper(node.left);
    let right = helper(node.right);
    return root + left + right;
  }

  function getTotalFromRoot(node, currentSum = 0) {
    if (!node) {
      return 0;
    }
    let newSum = currentSum + node.val;
    let res = 0;
    if (newSum === targetSum) {
      res++;
    }

    res += getTotalFromRoot(node.left, newSum);
    res += getTotalFromRoot(node.right, newSum);
    return res;
  }
};
