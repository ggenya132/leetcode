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
  let hash = {};
  return countTargetSums(root);
  function countTargetSums(root, currentValue = 0) {
    if (!root) {
      return 0;
    }
    let totalCount = 0;
    let newValue = currentValue + root.val;

    if (newValue === targetSum) {
      totalCount++;
    }
    if (hash.hasOwnProperty(newValue - targetSum)) {
      totalCount += hash[newValue - targetSum];
    }
    adjustHashValue(newValue, true);

    totalCount += countTargetSums(root.left, newValue);
    totalCount += countTargetSums(root.right, newValue);

    adjustHashValue(newValue);
    return totalCount;
  }

  function adjustHashValue(value, doIncrease = false) {
    if (!hash.hasOwnProperty(value)) {
      hash[value] = 1;
    } else {
      hash[value] = doIncrease ? hash[value] + 1 : hash[value] - 1;
    }
  }
};
