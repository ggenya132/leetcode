// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  // Write your code here.
  const helper = (nodeValues) => {
    let root = new BST(nodeValues[0]);
    //If we have only one value, we've reached a leaf, hurray
    if (nodeValues.length === 1) {
      return root;
    }

    let indexOfRightNode = null;
    let indexOfLeftNode = null;
    //find out where greater number begins, a right
    for (let i = 1; i < nodeValues.length; i++) {
      let currentNodeValue = nodeValues[i];
      if (currentNodeValue >= root.value) {
        indexOfRightNode = i;
        break;
      }
    }
    //find out where smaller numbers begin, the left
    for (let i = 1; i < nodeValues.length; i++) {
      let currentNodeValue = nodeValues[i];
      if (currentNodeValue < root.value) {
        indexOfLeftNode = i;
        break;
      }
    }
    //if there is a left, get tree for left with everything before right starts
    if (indexOfLeftNode !== null) {
      root.left = helper(
        nodeValues.slice(1, indexOfRightNode || nodeValues.length)
      );
    }
    //if there is a right, get everything after left side
    if (indexOfRightNode !== null) {
      root.right = helper(nodeValues.slice(indexOfRightNode));
    }
    return root;
  };
  const test = helper(preOrderTraversalValues);
  return test;
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;


	const helper = (nodeValues) => {
