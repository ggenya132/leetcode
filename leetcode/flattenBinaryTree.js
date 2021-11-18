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
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var flatten = function (root) {
  helper(root);
  function helper(root) {
    if (!root) {
      return null;
    }
    if (!root.left && !root.right) {
      return root;
    }
    let left;
    if (root.left) {
      left = helper(root.left);
    }
    let right;
    if (root.right) {
      right = helper(root.right);
    }
    if (left) {
      if (right) {
        const lastLeftRight = getLastRight(left);
        lastLeftRight.right = right;
      }
    }
    root.left = null;
    root.right = left ? left : right;
    return root;
  }
  function getLastRight(root) {
    while (root.right != null) {
      return getLastRight(root.right);
    }
    return root;
  }
};
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  helper(root);
  function helper(root) {
    if (!root) {
      return null;
    }
    if (!root.left && !root.right) {
      return root;
    }

    let leftTail = helper(root.left);

    let rightTail = helper(root.right);
    //MODIFY TAIL to suit condition
    if (leftTail) {
      leftTail.right = root.right;
    }
    root.right = leftTail ? root.left : root.right;
    root.left = null;
    return rightTail || leftTail;
  }
};

const bst = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(5)
);
const bstTwp = new TreeNode(
  5,
  new TreeNode(3, null, new TreeNode(4)),
  new TreeNode(9, new TreeNode(7), new TreeNode(8))
);

var flattenBST = function (root) {
  return helper(root);
  function helper(root) {
    if (!root) {
      return null;
    }
    if (!root.left && !root.right) {
      return root;
    }
    let leftTail = helper(root.left);
    let rightTail = helper(root.right);
    if (leftTail) {
      let current = leftTail;
      while (current.right != null) {
        current = current.right;
      }
      current.right = root;
      root.left = null;
    }
    if (rightTail) {
      root.right = rightTail;
    }

    return leftTail ? leftTail : root;
  }
};
let test = flattenBST(bstTwp);
while (test) {
  console.log(test.val);
  test = test.right;
}
