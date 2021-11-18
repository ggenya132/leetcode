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

    //invisible;
    let currentString = string;
    let currentRoot = this.root;
    let previousRoot;
    let i = currentString.length - 1;
    while (i >= 0) {
      let currentLetter = currentString[i];
      if (!currentRoot[currentLetter]) {
        if (i + 1 === currentString.length) {
          currentRoot[currentLetter] = { [this.endSymbol]: true };
        } else {
          let newLetter = {};
          newLetter[string[i + 1]] = currentRoot[string[i + 1]];
          currentRoot[currentLetter] = newLetter;
        }
      } else {
        //we have letter
        if (i + 1 === currentString.length) {
          currentRoot[this.endSymbol] = true;
        } else {
          currentRoot[currentLetter] = {
            ...currentRoot[currentLetter],
            [string[i + 1]]: currentRoot[string[i + 1]],
          };
        }
      }
      i--;
    }
  }

  contains(string) {
    // Write your code here.

    let currentString = string;

    let currentRoot = this.root;
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

//invisible
let test = new SuffixTrie("babc");
// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
