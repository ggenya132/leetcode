function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let tempMin;
    for (j = i; j < arr.length; j++) {
      let currentElemet = arr[j];
      if (!tempMin) {
        tempMin = currentElemet;
      } else {
        if (currentElemet < tempMin) {
          tempMin = currentElemet;
          swap(arr, i, j);
        }
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
