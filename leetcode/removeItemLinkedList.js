/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return null;
  }
  let current = head;
  //sentinel node
  let prev = (dummy = new ListNode(-1));
  prev.next = head;
  while (current) {
    if (current.val == val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return dummy.next;
};

// Sentinel nodes are widely used in trees and linked lists as pseudo-heads, pseudo-tails, markers of level end, etc. They are purely functional, and usually does not hold any data. Their main purpose is to standardize the situation, for example, make linked list to be never empty and never headless and hence simplify insert and delete.

// Here are two standard examples:

// LRU Cache, sentinel nodes are used as pseudo-head and pseudo-tail.

// Tree Level Order Traversal, sentinel nodes are used to mark level end.
