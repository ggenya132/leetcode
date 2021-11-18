// class Tree {
//   constructor(value = null, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }
// const breadthFirstTraversalClone = (tree, callback, newTree = new Tree()) => {
//   if (tree == null) {
//     return;
//   }
//   let queue = [tree];
//   let newTreeQueue = [newTree];
//   while (queue.length > 0) {
//     let item = queue.shift();
//     let value = item.value;
//     let newItem = newTreeQueue.shift();
//     newItem.value = callback(value);
//     if (item.left == null && item.right == null) {
//       continue;
//     }
//     if (item.left != null) {
//       newItem.left = new Tree();
//       queue.push(item.left);
//       newTreeQueue.push(newItem.left);
//     }
//     if (item.right != null) {
//       newItem.right = new Tree();
//       queue.push(item.right);
//       newTreeQueue.push(newItem.right);
//     }
//   }
//   return newTree;
// };
// t = new Tree(1, new Tree(2), new Tree(3, new Tree(4)));
// const multiplyByTwo = (value) => value * 2;
// // const clonedTree = breadthFirstTraversalClone(t, multiplyByTwo);
// // breadthFirstTraversalClone(clonedTree, console.log);

// const nodePositions = { left: "left", right: "right" };
// function depthFirstClone(node, callBack, newNode = new Tree(), nodePosition) {
//   if (node) {
//     newNode[nodePosition] = new Tree();
//     newNode = newNode[nodePosition];
//     depthFirstClone(node.left, callBack, newNode, nodePositions.left);
//     newNode.value = callBack(node.value);
//     depthFirstClone(node.right, callBack, newNode, nodePositions.right);
//   }
//   return newNode;
// }
// const newCloneAttempt = depthFirstClone(t, multiplyByTwo);
// depthFirstClone(t, console.log);
// depthFirstClone(newCloneAttempt, console.log);

var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (value) {
  var tree = new Tree(value);
  this.children.push(tree);
  return tree;
};

Tree.prototype.map = function (
  cb,
  newTree = new Tree(cb(this.value)),
  currentTree = this
) {
  for (let child of currentTree.children) {
    let lastPreviouslyAddedChild = newTree.addChild(cb(child.value));
    if (child.children.length > 0) {
      this.map(cb, lastPreviouslyAddedChild, child);
    }
  }
  return newTree;
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
const mappedTree = root1.map((val) => val * 2);
root1.map(console.log);
console.log("start cloned tree");
mappedTree.map(console.log);
