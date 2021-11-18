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
var getMinimumDifference = function (root) {
  let min = Infinity;
  helper(root);
  return min;
  function helper(root) {
    let minAndMax = { min: root.val, max: root.val };
    if (root.left) {
      let left = helper(root.left);
      minAndMax.min = left.min;
      min = Math.min(min, Math.abs(left.max - root.val));
    }
    if (root.right) {
      let right = helper(root.right);
      minAndMax.max = right.max;
      min = Math.min(min, Math.abs(right.min - root.val));
    }
    return minAndMax;
  }
};

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
 */ d;
var getMinimumDifference = function (root) {
  const iotArr = [];
  iot(root);
  let min = Infinity;
  let prev = iotArr.shift();
  for (const num of iotArr) {
    let candidate = Math.abs(prev - num);
    min = Math.min(candidate, min);
    prev = num;
  }
  return min;
  function iot(root) {
    if (!root) {
      return;
    }
    iot(root.left);
    iotArr.push(root.val);
    iot(root.right);
  }
};
