/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let prev;
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      while (current && current.next && current.val === current.next.val) {
        current = current.next;
      }
      current = current.next;
      if (prev) {
        prev.next = current;
        if (current && current.next && current.next.val !== current.val) {
          prev = current;
        }
      } else {
        head = current;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
