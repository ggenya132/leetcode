class Tree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

t = new Tree(
  1,
  new Tree(2, null, null),
  new Tree(3, new Tree(4, null, null), null)
);

const breadthFirstTraverdal = (tree, cb) => {
  let queue = [tree];
  while (queue.length) {
    // at least one iteration
    //take from front;
    let item = queue.shift();
    cb(item.value);
    if (!item.left && !item.right) {
      continue;
    }
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
  }
};

breadthFirstTraverdal(t, console.log);
