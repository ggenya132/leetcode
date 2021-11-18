// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.currentTenancy = 0;
    this.hash = {};
  }

  insertKeyValuePair(key, value) {
    let newNode = new Node(key, value);
    if (this.hash.hasOwnProperty(key)) {
      let node = this.hash[key];
      node.val = value;
      this.remove(node);
      this.add(node);
      return;
    }
    if (this.currentTenancy >= this.maxSize) {
      let lastUsedNode = this.tail.prev;
      delete this.hash[lastUsedNode.key];
      this.remove(lastUsedNode);
      this.currentTenancy--;
    }
    this.hash[key] = newNode;
    this.add(newNode);
    this.currentTenancy++;
  }

  getValueFromKey(key) {
    // Write your code here.
    if (!this.hash.hasOwnProperty(key)) {
      return null;
    }
    let node = this.hash[key];
    this.remove(node);
    this.add(node);
    return node.val;
  }

  getMostRecentKey() {
    // Write your code here.
    return this.head.next.key;
  }
  add(node) {
    let currentHead = this.head.next;
    currentHead.prev = node;
    node.next = currentHead;
    node.prev = this.head;
    this.head.next = node;
  }
  remove(node) {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}
// Do not edit the line below.
exports.LRUCache = LRUCache;
