/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  stack = [null];
  for (const letter of s) {
    if (letter == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
  //get rid of null;
  stack.shift();
  return stack.join("");
};
