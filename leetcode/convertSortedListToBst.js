/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  if (head.next == null) {
    return new TreeNode(head.val);
  }
  let middle;
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  middle = Math.floor(length / 2);
  let prev;
  current = head;
  let index = 0;
  while (index < middle) {
    prev = current;
    current = current.next;
    index++;
  }
  prev.next = null;
  let next = current.next;
  const newNode = new TreeNode(current.val);
  newNode.left = sortedListToBST(head);
  newNode.right = sortedListToBST(next);
  return newNode;
};

var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  if (head.next == null) {
    return new TreeNode(head.val);
  }
  let middle = findMiddle(head);
  const newNode = new TreeNode(middle.val);
  newNode.left = sortedListToBST(head);
  newNode.right = sortedListToBST(middle.next);
  return newNode;

  function findMiddle(head) {
    let slow = (prev = fast = head);
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = null;
    return slow;
  }
};

var sortedListToBST = function (head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return helper(arr);
  function helper(arr) {
    if (!arr.length) {
      return null;
    }
    if (arr.length == 1) {
      return new TreeNode(arr[0]);
    }
    let middle = Math.floor(arr.length / 2);
    let newNode = new TreeNode(arr[middle]);
    newNode.left = helper(0, middle);
    newNode.right = helper(middle + 1);
    return newNode;
  }
};
