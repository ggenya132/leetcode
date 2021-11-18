/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let res = new Array(numRows).fill(null).map((ignored) => new Array());

  let currentColumn = 0;
  let currentIndex = numRows;
  let currentString = s.substring(0, currentIndex);
  let wholeRow = true;
  while (currentString) {
    if (wholeRow) {
      doApplyWholeRow(currentString);
    } else {
      doApplyZag(currentString.substring(0, currentString.length - 2));
    }

    currentString = s.substring(
      currentIndex,
      currentIndex + (wholeRow ? numRows : numRows - 2)
    );
    wholeRow = !wholeRow;

    currentIndex += numRows;
  }
  function doApplyWholeRow(string) {
    console.log({ string });
    for (let i = 0; i < string.length; i++) {
      let currentChar = string[i];
      res[i][currentColumn] = currentChar;
    }
  }
  function doApplyZag(string) {
    console.log({ string });
    for (let i = numRows - 2; i >= 1; i--) {
      currentColumn++;
      res[i][currentColumn] = string;
    }
  }
};
