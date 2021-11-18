//LCA

var lowestCommonAncestor = function (root, p, q) {
  const hash = [];
  const outer = (hash) => {
    return (p, q, node) => {
      const arr = [];
      arr.push(node.left);
      arr.push(node.right);
      if (arr.includes(p) && arr.includes(q)) {
        hash.push(node.val);
      }
    };
  };

  function inOrderTraversal(node, cb) {
    if (node) {
      inOrderTraversal(node.left, cb);
      cb(p, q, node);
      inOrderTraversal(node.right, cb);
    }
  }
  inOrderTraversal(root, outer(hash));

  //RETURN LCA
};

const briefLCA = (root, p, q) => {
  if (!root || root == p || root == q) {
    return root;
  }
  let leftResponse = briefLCA(root.left, p, q);
  let rightResponse = briefLCA(root.right, p, q);
  return leftResponse && rightResponse ? root : leftResponse || rightResponse;
};
