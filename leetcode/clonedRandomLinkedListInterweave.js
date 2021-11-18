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
  let current = head;

  while (current) {
    let originalNext = current.next;
    let newNext = new Node(current.val);
    if (originalNext) {
      newNext.next = originalNext;
      current.next = newNext;
      current = current.next.next;
    } else {
      newNext.next = null;
      current.next = newNext;
      break;
    }
  }
  current = head;
  while (current) {
    let originalRandom = current.random;
    if (originalRandom) {
      let clonedRandom = originalRandom.next;
      current.next.random = clonedRandom;
    } else {
      current.next.random = null;
    }
    current = current.next.next;
  }
  let clonedHead = head.next;
  current = head;

  while (current) {
    let clonedNext = current.next;
    let originalNext = clonedNext.next;
    current.next = originalNext;
    if (originalNext) {
      clonedNext.next = clonedNext.next.next;
    } else {
      clonedNext.next = null;
    }
    current = current.next;
  }
  return clonedHead;
};
