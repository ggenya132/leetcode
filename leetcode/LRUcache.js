/**
 * @param {number} capacity
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.hash = {};
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.currentTenancy = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.hash.hasOwnProperty(key)) {
    return -1;
  }
  let node = this.hash[key];
  this.remove(node);
  this.add(node);
  return node.value;
};
LRUCache.prototype.add = function (node) {
  let headNext = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = headNext;
  headNext.prev = node;
};
LRUCache.prototype.remove = function (node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hash.hasOwnProperty(key)) {
    let node = this.hash[key];
    node.value = value;
    this.remove(node);
    this.add(node);
  } else {
    if (this.currentTenancy == this.capacity) {
      let lastNode = this.tail.prev;
      delete this.hash[lastNode.key];
      this.remove(lastNode);
      this.currentTenancy--;
    }
    let newNode = new Node(key, value);
    this.hash[key] = newNode;
    this.add(newNode);
    this.currentTenancy++;
    console.log(this.currentTenancy);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
