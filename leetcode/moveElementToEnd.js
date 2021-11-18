function moveElementToEnd(arr, toMove) {
  // Write your code here.
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let current = arr[start];
    let endEl = arr[end];
    if (endEl === toMove) {
      end--;
      continue;
    }
    if (current === toMove) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
      continue;
    } else {
      start++;
      continue;
    }
  }
  return arr;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
