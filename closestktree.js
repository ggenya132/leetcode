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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let currentClosetTarget = undefined;
  if (root.val === target) {
    return root.val;
  }
  if (target > root.val) {
    root.left = null;
  }
  if (target < root.val) {
    root.right = null;
  }
  const arr = [];
  const traverseTree = (node, cb) => {
    if (node !== null) {
      console.log({ val: node.val });
      traverseTree(node.left, cb);
      cb(node.val, cb);
      traverseTree(node.right, cb);
    }
  };
  traverseTree(root, (val) => {
    arr.push(val);
  });
  arr.forEach((val) => {
    if (
      !currentClosetTarget ||
      Math.abs(val - target) < Math.abs(currentClosetTarget - target)
    ) {
      currentClosetTarget = val;
    }

    console.log({ val });
  });
  console.log({ arr });
  return currentClosetTarget;
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
 */
var findSecondMinimumValue = function (root) {
  const arr = [];
  const tree = (root) => {
    if (root) {
      tree(root.left);
      arr.push(root.val);
      tree(root.right);
    }
  };
  tree(root);
  const set = new Set(arr.sort((a, b) => a - b));
  return Array.from(set).length > 1 ? Array.from(set)[1] : -1;
};
