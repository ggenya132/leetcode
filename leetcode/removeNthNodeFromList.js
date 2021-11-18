/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // if(n == 1){
  //     return head.next;
  // }
  let lengthOfList = 0;
  let prev = null;
  let current = head;
  while (current) {
    lengthOfList++;
    current = current.next;
  }
  current = head;
  let currentNode = -1;
  while (current) {
    currentNode++;
    if (lengthOfList - currentNode == n) {
      if (!prev) {
        head = current.next;
        return head;
      }
      prev.next = current.next;
      return head;
    }
    prev = current;
    current = current.next;
  }
};
