class Trie {
  constructor() {
    this.root = {};
  }
  add(word) {
    this.buildTrieFromWord(word);
  }
  buildTrieFromWord(word, isPrefix = false) {
    let node = this.root;
    for (let letter of word) {
      if (!node[letter]) {
        node[letter] = {};
      }
      node = node[letter];
    }
    node["*"] = word;
  }
  contains(word) {
    let node = this.root;
    for (let letter of word) {
      if (!node[letter]) {
        return false;
      }
      node = node[letter];
    }
    return !!node["*"];
  }
  containsPrefix(word) {
    let node = this.root;
    for (let letter of word) {
      if (!node[letter]) {
        node[letter] = {};
      }
      node = node[letter];
    }
    return node.isPrefix ? true : false;
  }
}
