function partition(arr, start, end) {
  // Taking the last element as the pivot
  console.log({ start, end });
  if (start >= end) {
    return arr;
  }
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      //   console.log(arr[i] + " less than " + pivotValue);
      //   console.log("Swapping " + arr[i] + " with " + arr[pivotIndex]);
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  partition(arr, start, pivotIndex - 1);
  partition(arr, pivotIndex + 1, end);
  return arr;
}

const arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const arrTwo = [-1, -2, 3];
const sortedArr = partition(arr, 0, arr.length - 1);
console.log({ sortedArr });
