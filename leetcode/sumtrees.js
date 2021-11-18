/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {
  if (!root1 || !root2) {
    return false;
  }
  let hasSum = false;
  let hash = {};
  const pot = (root, cb) => {
    if (root) {
      cb(root.val);
      pot(root.left, cb);
      pot(root.right, cb);
    }
  };
  pot(root1, (val) => {
    hash[val] = true;
  });
  const hasNumNeeded = (val) => {
    const numNeeded = target - val;
    console.log({ numNeeded });
    if (hash[numNeeded]) {
      hasSum = true;
    }
  };
  pot(root2, hasNumNeeded);
  return hasSum;
};
