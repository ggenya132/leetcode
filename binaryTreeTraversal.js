function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;

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
 * @return {number[]}
 */
var findMode = function (root) {
  const numbers = [];
  dft = (r) => {
    if (r !== null) {
      numbers.push(r.val);
      dft(r.left);
      dft(r.right);
    }
  };
  dft(root);

  const modeMap = numbers.reduce((acc, next) => {
    acc[next] = acc[next] ? acc[next] + 1 : 1;
    return acc;
  }, {});
  var greatestFreq = 0;
  var mode;
  for (var prop in modeMap) {
    if (numMapping[prop] >= greatestFreq) {
      greatestFreq = numMapping[prop];
      mode = prop;
    }
  }
  return mode;
};
