var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return helper(root.left, root.right);

  function helper(left, right) {
    if (left === null || right === null) {
      return right === left;
    }
    if (right.val !== left.val) {
      return false;
    }

    return helper(left.right, right.left) && helper(left.left, right.right);
  }
};
