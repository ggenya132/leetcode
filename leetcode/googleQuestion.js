class Leaf {
  constructor(length, data) {
    this.length = length;
    this.data = data;
  }
}
class Internal {
  constructor(length, left = null, right = null) {
    this.length = length;
    this.left = left;
    this.right = right;
  }
}

let leftLeaf = new Leaf(2, "ab");
let rightInternalRightLeafLeft = new Leaf(3, "cde");
let rightInternal = new Internal(3, rightInternalRightLeafLeft);
let root = new Internal(5, leftLeaf, rightInternalRightLeafLeft);

function getN(root, n) {
  console.log(root);
  if (!root || root.length < n) {
    return -1;
  }
  //helper(root, n);
  function helper(node, n) {
    let q = [node];

    while (q.length) {
      let current = q.unshift();
      console.log({ current });
      if (current["data"] && n < current.length) {
        return current.data[n];
      }
      if (current["data"] && current.length < n) {
        n -= current.length;
      }
      let { left, right } = current;
      console.log({ left, right });
      if (left) {
        q.push(left);
      }
      if (right) {
        q.push(right);
      }
    }
  }
}

let test = getN(root, 5);
console.log({ test });
