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
var maxPathSum = function (root) {
  let [_, greatestPathSum] = helper(root);
  return greatestPathSum;
  function helper(root) {
    if (!root) {
      let maxBranchSum = 0;
      let maxPathSum = -Infinity;
      return [maxBranchSum, maxPathSum];
    }
    let [leftBranchSum, leftMaxPathSum] = helper(root.left);
    let [rightBranchSum, rightMaxPathSum] = helper(root.right);
    let biggestBranchSumBetweenLeftAndRight = Math.max(
      leftBranchSum,
      rightBranchSum
    );

    let maxPossibleBranchSumWithCurrentRoot = Math.max(
      biggestBranchSumBetweenLeftAndRight + root.val,
      root.val
    );

    let maxPathPossible = Math.max(
      leftBranchSum + rightBranchSum + root.val,
      maxPossibleBranchSumWithCurrentRoot
    );

    let greatestPathSumSeen = Math.max(
      maxPathPossible,
      rightMaxPathSum,
      leftMaxPathSum
    );

    return [maxPossibleBranchSumWithCurrentRoot, greatestPathSumSeen];
    //
  }
  //juicy
};
