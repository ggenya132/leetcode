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
var goodNodes = function (root) {
  let amountOfGoodNodes = 0;
  let helper = (root, maxEncountered) => {
    if (!root) {
      return;
    }

    if (maxEncountered <= root.val) {
      amountOfGoodNodes++;
    }
    maxEncountered = Math.max(root.val, maxEncountered);
    helper(root.left, maxEncountered);
    helper(root.right, maxEncountered);
  };
  helper(root, root.val);
  return amountOfGoodNodes;
};
