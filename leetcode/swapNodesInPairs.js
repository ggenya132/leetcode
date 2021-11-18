var swapPairs = function (head, newHead, prev) {
  if (!head || !head.next) {
    return newHead ? newHead : head;
  }

  let next = head.next;
  let nextsNext = next.next;
  head.next = nextsNext;
  next.next = head;
  if (!newHead) {
    newHead = next;
  }
  if (prev) {
    prev.next = next;
  }
  prev = head;
  return swapPairs(nextsNext, newHead, prev);
};
