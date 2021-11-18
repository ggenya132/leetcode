/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.buildTrie(word);
};

WordDictionary.prototype.buildTrie = function (word) {
  let node = this.root;
  let maxLevel = 0;
  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    if (!node[currentLetter]) {
      node[currentLetter] = {};
    }
    node = node[currentLetter];
    maxLevel++;
  }
  node["*"] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, node = this.root) {
  if (!word.length) {
    return node["*"] ? true : false;
  }
  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    if (currentLetter === ".") {
      for (key in node) {
        let value = node[key];
        if (this.search(word.substring(i + 1), value)) {
          return true;
        }
      }
      return false;
    }

    if (!node[currentLetter]) {
      return false;
    }
    node = node[currentLetter];
  }
  return node["*"] ? true : false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
