/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!inorder.length) {
    return null;
  }
  let root = preorder.shift();
  let indexOfRoot;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] == root) {
      indexOfRoot = i;
      break;
    }
  }
  let newRoot = new TreeNode(root);
  newRoot.left = buildTree(preorder, inorder.slice(0, indexOfRoot));
  newRoot.right = buildTree(preorder, inorder.slice(indexOfRoot + 1));
  return newRoot;
};
