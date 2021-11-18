/**
 * @param {string} s
 * @return {string}
 */

// Input: s = "lee(t(c)o)de)"
// Ouxtput: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
var minRemoveToMakeValid = function (s) {
  const splitstring = s.split("");
  const makeStackElement = (char, index) => ({ index, char });
  let stack = [];
  let count = 0;
  splitstring.forEach((char, index) => {
    if (char == "(") {
      stack.push(index);
    }
    if (char == ")") {
      if (stack.length === 0) {
        splitstring[index] = "";
      } else {
        stack.pop();
      }
    }
  });

  console.log({ stack });

  const newString = splitstring
    .map((c, i) => {
      if (stack.some((index) => index == i)) {
        return "";
      }
      return c;
    })
    .join("");

  return newString;
};
