class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  find(val, node = this.root) {
    if (!node) {
      return null;
    }
    if (val === node.val) {
      return node;
    }
    return val > node.val
      ? this.find(val, node.right)
      : this.find(val, node.left);
  }
  constructor() {
    this.root = null;
  }
  insert(val, root = this.root, currentNode = this.root) {
    if (!root) {
      this.root = new Node(val);
      return this.root;
    }
    if (currentNode.val < val) {
      //it goes to the right
      if (!currentNode.right) {
        currentNode.right = new Node(val);
        return root;
      } else {
        return this.insert(val, root, currentNode.right);
      }
    }
    if (currentNode.val >= val) {
      if (!currentNode.left) {
        currentNode.left = new Node(val);
        return root;
      } else {
        return this.insert(val, root, currentNode.left);
      }
    }
  }
  bft(cb, root = this.root) {
    let queue = [this.root];
    while (queue.length) {
      let currentNode = queue.shift();
      let { left, right } = currentNode;
      cb(currentNode);
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
