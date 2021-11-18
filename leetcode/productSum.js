// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(arr) {
  let sum = 0;
  function getValue(n, productSum = 1) {
    if (Array.isArray(n)) {
         let sumTotal = 0;
        n.forEach( el => {
            sumTotal += getValue(el, productSum);
        }) 
        return productSum * sumTotal;
    } else {
      return n;
    }
  }
  let previousNumber;

  for (let i = 0; i < array; i++) {
    let currentElement = arr[i];
    if (Array.isArray(currentElement)) {
        let sumTotal = 0;
        currentElement.forEach( el => {
            sumTotal +=
        })
    }
  }
}

// Do not edit the line below.
exports.productSum = productSum;
