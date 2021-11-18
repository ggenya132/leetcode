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
  let hash = {};

  let current = head;
  let index = 0;
  while (current) {
    let copy = new Node(current.val);
    hash[index] = copy;
    current.index = index;
    current = current.next;
    index++;
  }
  let newHead = hash[head.index];
  current = head;
  let copyCurrent = newHead;
  while (current) {
    let next = current.next;
    if (next) {
      copyCurrent.next = hash[next.index];
    } else {
      copyCurrent.next = null;
    }
    let random = current.random;
    if (random) {
      copyCurrent.random = hash[random.index];
    } else {
      copyCurrent.random = null;
    }
    copyCurrent = copyCurrent.next;
    current = current.next;
  }
  return newHead;
};
