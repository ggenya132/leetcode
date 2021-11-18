/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let allCombinations = [];

  let array = new Array(n * 2).fill("(").map((val, index) => {
    if (index > n - 1) {
      return ")";
    } else return val;
  });

  helper(array.slice(1), 1, "(");
  function helper(arr, numberOfOpenings = 0, currentCombination = "") {
    console.log({ arr, numberOfOpenings, currentCombination });

    if (arr.length === 0) {
      allCombinations.push(currentCombination);
    }
    for (let i = 0; i < arr.length; i++) {
      let currentString = arr[i];
      {
      }

      if (currentString === ")" && numberOfOpenings === 0) {
        continue;
      }
      let newNumberOfOpenings;
      if (currentString === "(") {
        neNumberOfOpenings = numberOfOpenings + 1;
      } else {
        newNumberOfOpenings = numberOfOpenings - 1;
      }
      let arrayWithoutCharacter = [...arr.slice(0, i), ...arr.slice(i + 1)];
      let newString = currentCombination + currentString;
      console.log({ newString });
      console.log({ arrayWithoutCharacter });

      helper(arrayWithoutCharacter, newNumberOfOpenings, currentString);
    }
  }
};

let generateParenthesis = function (n) {
  let allResults = [];
  helper(n);
  console.log(allResults);
  function helper(n, currentString = "", currentOpen = 0, currentClosed = 0) {
    console.log({ currentOpen, currentString });
    if (currentString.length === n * 2) {
      allResults.push(currentString);
      return;
    }

    if (currentOpen < n) {
      helper(n, currentString + "(", currentOpen + 1, currentClosed);
    }
    //it is really important to keep the string immutable or we risk creating doubles 
    if (currentClosed < currentOpen) {
      helper(n, currentString + ")", currentOpen, currentClosed + 1);
    }
  }
  return allResults;
};
