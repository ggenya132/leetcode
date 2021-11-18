const { parse } = require("path");

class CardPrefix {
  constructor(cardNumber) {
    this.firstNumber = cardNumber[0];
    this.firstTwoNumbers = cardNumber.slice(0, 2);
  }
  getFirstNumber() {
    return this.firstNumber;
  }
  getFirstTwoNumbers() {
    return this.firstTwoNumbers;
  }
}
var cardData = [
  {
    "issuer/network": "Visa", // card issuer (network)
    prefixes: ["4"], // beginning digits
    lengths: [13, 16, 19], // lengths of card numbers
  },
  {
    "issuer/network": "Mastercard",
    prefixes: ["51", "52", "53", "54", "55"],
    lengths: [16],
  },
  {
    "issuer/network": "American Express",
    prefixes: ["34", "37"],
    lengths: [15],
  },
  {
    "issuer/network": "Diner's Club",
    prefixes: ["38", "39"],
    lengths: [14],
  },
];

function detectNetwork(cardNumber, cardData) {
  let network = undefined;
  const parsedCardNumber = standerdizeInput(cardNumber);
  console.log({ parsedCardNumber });

  const cardPrefixes = { firstNumber: undefined, firstTwoNumbers: undefined };
  cardPrefixes["firstNumber"] = cardNumber[0];
  cardPrefixes["firstTwoNumbers"] = cardNumber.slice(0, 2);

  //OOP

  //ES5
  //   for (let i = 0; i < cardData.length; i++) {
  //     const currentCardData = cardData[i];
  //     if (cardIsWithinNetwork(currentCardData, cardPrefixes)) {
  //       network = currentCardData["issuer/network"];
  //     }
  //   }

  //ES6 with filter
  //   return cardData.filter((entry) => {
  //     if (cardIsWithinNetwork(entry, cardPrefixes)) {
  //       return entry["issuer/network"];
  //     }
  //   })[0]["issuer/network"];

  return cardData.reduce((acc, entry) => {
    if (cardIsWithinNetwork(entry, cardPrefixes)) {
      acc = entry["issuer/network"];
    }
    return acc;
  }, "");
  //   return network;

  function cardIsWithinNetwork(cardDataNetworkEntry, cardPrefixes) {
    return (
      cardDataNetworkEntry.prefixes.includes(cardPrefixes.firstNumber) ||
      cardDataNetworkEntry.prefixes.includes(cardPrefixes.firstTwoNumbers)
    );
  }

  function standerdizeInput(cardNumber) {
    return `${cardNumber}`;
  }
}

// example
var network = detectNetwork("343456789012345", cardData);
console.log(network); // --> 'American Express'

function isEven(number) {
  return number % 2 === 0;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(array) {
  return array.reduce((acc, next) => {
    return acc + next;
  }, 0);
}

console.log(arr.filter(isEven));
console.log(getSum(arr));

const myFirstObject = new CardPrefix("343456789012345");

console.log(myFirstObject.getFirstNumber());
console.log(myFirstObject.getFirstTwoNumbers());
