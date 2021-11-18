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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum, currentSum = undefined) {
    if(!root && currentSum !== undefined){
        return currentSum === targetSum;
    }
    if(!currentSum){
        currentSum = root.val
    }
    return hasPathSum(root.left, targetSum, currentSum + root.val) ||
    hasPathSum(root.right, targetSum, currentSum + root.val)
};