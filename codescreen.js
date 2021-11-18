// const reverseString = (string) => string.split("").reverse().join("");
// const reversedString = reverseString("Hello world");
// console.log({ reversedString });

// Input:

// “The cure for boredom is curiosity. There is no cure for curiosity.”, 20

// Output:

// The cure for boredom
// is curiosity. There
// is no cure for
// curiosity.

function wordWrap(string, characterLimit) {
  // Break string into array
  // traverse array, keep reference of the current column or index
  // inspect string, if exceeds character limit, toss in a /n
  // join array
  const splitSentence = string.split(".");
  console.log({ splitSentence });
  //   for (let i = 0; i < splitSentence.length; i++) {
  //     splitSentence[0].length > characterLimit
  //   }
  let currentCharacterCount = 0;
  const stringWithBreakLines = [];
  splitSentence.forEach((sentence) => {
    sentence.split(" ").forEach((individualWord) => {
      if (individualWord.length + currentCharacterCount > characterLimit) {
        stringWithBreakLines.push(\n);
        stringWithBreakLines.push(individualWord);
        currentCharacterCount = 0;
      } else {
        stringWithBreakLines.push(individualWord);
        currentCharacterCount = currentCharacterCount + individualWord.length;
      }
    });
  });
  return stringWithBreakLines.join(" ");
}

const brokenWord = wordWrap(
  "The cure for boredom is curiosity. There is no cure for curiosity.",
  20
);
console.log({ brokenWord });
