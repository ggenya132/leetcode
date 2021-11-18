//the key to this problem is realizing that every sub stree follows the same rulles as the root,
//that is, too find the min height bst, you always need to take the middle of the array
//with that in mind, you can recurislvey call the function for left and right sides till you finish traversing the array in O(n)
function minHeightBst(arr) {
  // Write your code here.
  if (!arr.length) {
    return null;
  }
  let indexOfMiddle = Math.floor((arr.length - 1) / 2);
  var middle = arr[indexOfMiddle];

  let leftSide = arr.slice(0, indexOfMiddle);

  let rightSide = arr.slice(indexOfMiddle + 1);
  let bst = new BST(middle);

  bst.left = minHeightBst(leftSide);
  bst.right = minHeightBst(rightSide);

  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
