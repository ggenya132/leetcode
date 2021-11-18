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
var deleteDuplicatesUnsorted = function (head) {
  let hash = {};
  let prev;
  let current = head;
  while (current) {
    hash[current.val] = hash[current.val] ? hash[current.val] + 1 : 1;
    current = current.next;
  }

  current = head;
  while (current) {
    let numberOfAppearanances = hash[current.val];
    if (numberOfAppearanances > 1) {
      if (prev) {
        prev.next = current.next;
      } else {
        head = current.next;
      }
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
