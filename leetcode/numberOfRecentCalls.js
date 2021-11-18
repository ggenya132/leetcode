//sentinal node ftw!
class Node {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val ? val : null;
  }
}
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  peek() {
    if (this.head.next == this.tail) {
      return null;
    }
    return this.head.next;
  }
  remove() {
    let next = this.head.next.next;
    next.prev = this.head;
    this.head.next = next;
    this.size--;
  }
  add(val) {
    this.size++;
    const newNode = new Node(val);
    const lastTail = this.tail.prev;
    lastTail.next = newNode;
    this.tail.prev = newNode;
    newNode.prev = lastTail;
    newNode.next = newNode;
  }
}

var RecentCounter = function () {
  this.linkedList = new LinkedList();
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.linkedList.add(t);
  while (this.linkedList.peek().val < t - 3000) {
    this.linkedList.remove();
  }
  return this.linkedList.size;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
