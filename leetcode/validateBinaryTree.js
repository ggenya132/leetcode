function validateBST(tree) {
  function helper(tree, min, max) {
    if (!tree) {
      return true;
    } else {
      if ((min && tree.value <= min) || (max && tree.value >= max)) {
        return false;
      }
      return (
        helper(tree.left, min, tree.value) &&
        helper(tree.right, tree.value, max)
      );
    }
  }
  helper(tree);
}

function validateBst(tree, min = -Infinity, max = Infinity) {
  if (!tree) {
    return true;
  } else {
    if (tree.value < min || tree.value >= max) {
      return false;
    }
    return (
      validateBst(tree.left, min, tree.value) &&
      validateBst(tree.right, tree.value, max)
    );
  }
}

var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) {
    return true;
  }
  return (
    root.val > min &&
    root.val < max &&
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
