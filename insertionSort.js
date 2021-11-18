function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let prevIndex = i - 1;
    while (arr[prevIndex] > currentElement && prevIndex >= 0) {
      swap(prevIndex, prevIndex + 1);
      prevIndex--;
    }
  }
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
