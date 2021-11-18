// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let sums = [];
  const inOrderTraversal = (providedRoot, sum = 0) => {
    if (providedRoot.left) {
      inOrderTraversal(providedRoot.left, providedRoot.value + sum);
    }
    if (providedRoot.right) {
      inOrderTraversal(providedRoot.right, providedRoot.value + sum);
    }
    if (!providedRoot.left && !providedRoot.right) {
      let total = providedRoot.value + sum;
      sums.push(total);
    }
  };
  inOrderTraversal(root);
  return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
