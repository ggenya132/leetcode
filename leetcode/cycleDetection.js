/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = (slow = head);
  //if loop exists, nodes will collide at LOOPED_LOOP_LENGTH - k, where k is size of loop
  // in other worse, starting loop node is k away from start
  // so just move slow and fast one a piece until they catch up, traversing k steps, or length
  // of non looped loop
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return null;
  }
  const intersection = getIntersection(head);
  return intersection ? getCycleStart(intersection) : null;
  function getIntersection(head) {
    let slow = (fast = head);
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        return fast;
      }
    }
    return null;
  }
  function getCycleStart(intersection) {
    let slow = head;
    let fast = intersection;
    while (fast != slow) {
      slow = slow.next;
      fast = fast.next;
    }
    return fast;
  }
};
