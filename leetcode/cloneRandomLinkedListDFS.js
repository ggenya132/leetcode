/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  //add index for hashing

  let current = head;
  let index = 0;
  while (current) {
    current.index = index;
    current = current.next;
    index++;
  }
  return clone(head);
  function clone(head, seen = {}) {
    if (!head) {
      return null;
    }
    if (seen[head.index]) {
      return seen[head.index];
    }
    let newNode = new Node(head.val);
    seen[head.index] = newNode;

    newNode.next = clone(head.next, seen);
    newNode.random = clone(head.random, seen);
    return newNode;
  }
};
