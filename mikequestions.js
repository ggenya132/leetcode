// var arr = ["a", "c", "e"];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// //var output = select(arr, obj);
// //console.log(output); // --> { a: 1, c: 3 }

// // obj[arr[x]] !== undefined;

// // obj["a"];

// for (let i = 0; i < arr.length; i++) {
//   const valueOfCurrentIndexOfArray = arr[i];
//   const valueOfObjectForCurrentKey = obj[valueOfCurrentIndexOfArray];

//   console.log({ valueOfCurrentIndexOfArray, valueOfObjectForCurrentKey });
// }

// function select(array, object) {
//   function objectHasKey(object, key) {
//     return object[key] !== undefined;
//   }

//   const newObject = {};
//   for (let i = 0; i < array.length; i++) {
//     const potentialKeyInObject = arr[i];
//     if (objectHasKey(object, potentialKeyInObject)) {
//       const valueOfKey = object[potentialKeyInObject];
//       newObject[potentialKeyInObject] = valueOfKey;
//     }
//   }

//   //   const keysPresentInObject = array.filter(function (potentialKey) {
//   //     return objectHasKey(object, potentialKey);
//   //   });
//   console.log({ keysPresentInObject });
//   return newObject;
// }

// function filter(arr, filterConditionFunction) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     if (filterConditionFunction(currentElement)) {
//       newArray.push(currentElement);
//     }
//   }
//   return newArray;
// }
// function isOdd(number) {
//   return number % 2 === 1;
// }
// const onlyOdds = filter([1, 2, 3, 4], isOdd);
// console.log({ onlyOdds });

// var output = select(arr, obj);
// console.log({ output });
const findPairForSum = (arr, targetSum) => {
  let pair = [];
  const encounteredNumbers = {};
  for (let i = 0; i < arr.length; i++) {
    let firstAdder = arr[i];
    let potenialSecondAdder = targetSum - firstAdder;
    const secondAdder = encounteredNumbers[potenialSecondAdder];
    if (secondAdder) {
      pair = [firstAdder, potenialSecondAdder];
    } else {
      encounteredNumbers[firstAdder] = true;
    }
    if (pair.length) {
      return pair;
    }
  }
};
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log({ pair });
