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
  let count = 0;
  helper(root);
  return count;
  function countTargetSum(root, currentVal = 0) {
    if (!root) {
      return;
    }
    let newVal = currentVal + root.val;
    if (newVal === targetSum) {
      count++;
    }
    countTargetSum(root.left, newVal);
    countTargetSum(root.right, newVal);
  }
  function helper(root) {
    if (!root) {
      return;
    }
    countTargetSum(root);
    helper(root.left);
    helper(root.right);
  }
};
