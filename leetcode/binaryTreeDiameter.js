// This is an input class. Do not edit.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
  let [_, d] = helper(tree);
  return d;
}
function helper(tree) {
  if (!tree) {
    return [0, 0];
  }
  let [leftTreeHeight, leftTreeDiameter] = helper(tree.left);
  let [rightTreeHeight, rightTreeDiameter] = helper(tree.right);
  let longestPathThroughCurrentTree = leftTreeHeight + rightTreeHeight;
  let maxDiameterSeen = Math.max(leftTreeDiameter, rightTreeDiameter);
  let currentDiameter = Math.max(
    maxDiameterSeen,
    longestPathThroughCurrentTree
  );
  return [Math.max(leftTreeHeight, rightTreeHeight) + 1, currentDiameter];
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
