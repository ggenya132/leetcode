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
var deleteDuplicates = function (head, current = head, prev) {
  if (!current) {
    return head;
  } else {
    if (prev && current.val === prev.val) {
      prev.next = current.next;
      return deleteDuplicates(head, current.next, prev);
    } else {
      return deleteDuplicates(head, current.next, current);
    }
  }
};
