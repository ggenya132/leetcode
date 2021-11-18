// var searchBST = function(root, val) {
//     if(!root){
//         return null;
//     }
//     if(root.val == val){
//         return root;
//     }
//     if(val > root.val){
//        return searchBST(root.right, val)
//     }
//     if(val < root.val){
//        return searchBST(root.left, val)
//     }
// };

var searchBST = (root, val) =>
  !root
    ? null
    : root.val == val
    ? root
    : val > root.val
    ? searchBST(root.right, val)
    : searchBST(root.left, val);
