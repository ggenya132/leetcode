const input = [5, 2, 4, 6, 1, 3];
const input2 = [24, 18, 38, 43, 14, 40, 1, 54];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let current = arr[j];
      let next = arr[j + 1];
      if (current > next) {
        arr[j] = next;
        arr[j + 1] = current;
      }
    }
  }
}

bubbleSort(input2);
console.log({ input2 });
