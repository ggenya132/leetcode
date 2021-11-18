function convertRomanNumber(romanNumber) {
  const numberMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const getDecimalNumberFromOneNumber = (romanNumeral) =>
    numberMap[romanNumeral];
  const romanNumberArray = romanNumber.trim().split("");

  let sum = 0;
  for (let i = 0; i < romanNumberArray.length; i++) {
    let firstNumber, secondNumber;
    firstNumber = getDecimalNumberFromOneNumber(romanNumberArray[i]);
    if (i + 1 < romanNumberArray.length) {
      secondNumber = getDecimalNumberFromOneNumber(romanNumberArray[i + 1]);
    }
    if (secondNumber) {
      if (secondNumber > firstNumber) {
        sum = sum + (secondNumber - firstNumber);
        i++;
      } else {
        sum = sum + firstNumber;
      }
    } else {
      sum = sum + firstNumber;
    }
  }
  return sum;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  return head == null ? 0 : count(head, 1);
}

function count(head, data) {
  // Your code goes here.
  if (head.next == null) {
    return data;
  } else {
    return count(head.next, data + 1);
  }
}

function length(head) {
  function traverse(head, data) {
    if (head.next == null) {
      return data;
    } else {
      return traverse(head.next, data + 1);
    }
  }
  return head ? 0 : traverse(head, 0);
}
