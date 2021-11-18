// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.

    let currentString = string;
    let currentRoot = this.root;
    let i = 0;
    while (currentString.length) {
      let currentLetter = currentString[0];
      if (currentRoot[currentLetter]) {
        currentRoot = currentRoot[currentLetter];
      } else {
        let newLetter = {};
        currentRoot[currentLetter] = newLetter;
        currentRoot = newLetter;
      }
      i++;
      currentString = string.substring(i);
    }
    currentRoot[this.endSymbol] = true;
  }

  contains(string) {
    // Write your code here.

    let stringToStart = "";
    let currentString = string;
    let i = 1;

    let currentRoot = this.root;
    while (!currentRoot[currentString] && currentString.length) {
      currentString = string.substring(i);
      i++;
    }
    if (!currentString.length) {
      return false;
    }

    for (let i = 0; i < currentString.length; i++) {
      let letter = currentString[i];
      if (currentRoot[letter]) {
        currentRoot = currentRoot[letter];
      } else {
        return false;
      }
    }
    return currentRoot[this.endSymbol] ? true : false;
  }
}
const fs = require("fs");
let rawdata = fs.readFileSync("../../dictionary.json");

let dictionary = JSON.parse(rawdata);

let dictTrie;

for (key in dictionary) {
  if (!dictTrie) {
    dictTrie = new SuffixTrie(key);
  } else {
    dictTrie.populateSuffixTrieFrom(key);
  }
}

console.log({ dictTrie: dictTrie.contains("hurr") });

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
