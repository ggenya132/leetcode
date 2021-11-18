function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      let currentElement = arr[j];
      let previousElement = arr[j - 1];
      console.log({ currentElement, previousElement });
      if (currentElement < previousElement) {
        console.log("in swap");
        console.log(arr);
        swap(arr, j, j - 1);
        console.log(arr);
        break;
      }
    }
  }

  function swap(arr, indexOne, indexTwo) {
    let temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
  }
  return arr;
}
