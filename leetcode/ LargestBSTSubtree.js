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
  if (!root) {
    return 0;
  }
  class BstSnapshot {
    constructor(size = 0, min = Infinity, max = -Infinity) {
      this.size = size;
      this.min = min;
      this.max = max;
    }
  }
  let maxLength = 0;
  helper(root);
  return maxLength;
  function helper(root) {
    if (!root) {
      return new BstSnapshot();
    }

    let { size: sizeLeft, min: minLeft, max: maxLeft } = helper(root.left);
    let { size: sizeRight, min: minRight, max: maxRight } = helper(root.right);
    if (
      maxLeft >= root.val ||
      minRight <= root.val ||
      sizeLeft === -1 ||
      sizeRight === -1
    ) {
      return new BstSnapshot(-1);
    }
    let newMin = Math.min(minLeft, root.val);
    let newMax = Math.max(maxRight, root.val);

    let maxSize = sizeLeft + sizeRight + 1;
    maxLength = Math.max(maxLength, maxSize);
    return new BstSnapshot(maxSize, newMin, newMax);
  }
};
