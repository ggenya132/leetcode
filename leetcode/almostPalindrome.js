const validPalindrome = (inputStr = "") => {
  if (inputStr.length === 0) {
    return true;
  }

  let leftPointer = 0;
  let rightPointer = inputStr.length - 1;
  let offBy = 0;

  while (offBy <= 1 && rightPointer > leftPointer) {
    let leftChar = inputStr[leftPointer];
    let rightChar = inputStr[rightPointer];

    if (leftChar == rightChar) {
      leftPointer += 1;
      rightPointer -= 1;
    } else {
      // Try bringing leftPointer in one and checking for match. If match, increment offBy and continue.
      if (
        inputStr[leftPointer + 1] === rightChar &&
        inputStr[leftPointer + 2] === inputStr[rightPointer - 1]
      ) {
        offBy += 1;
        leftPointer += 2;
        rightPointer -= 1;
      }

      // Try bringing rightPointer in one and checking for match. If match, increment offBy and continue.
      else if (
        inputStr[rightPointer - 1] === leftChar &&
        inputStr[rightPointer - 2] === inputStr[leftPointer + 1]
      ) {
        offBy += 1;
        leftPointer += 1;
        rightPointer -= 2;
      }

      // If we are down to two characters and were able to get this far, we should have a valid passing case
      else if (rightPointer - leftPointer === 1) {
        return true;
      }

      // Otherwise, if neither is off by one, it cannot be an almost palindrome.
      else {
        return false;
      }
    }
  }

  return offBy <= 1;
};
