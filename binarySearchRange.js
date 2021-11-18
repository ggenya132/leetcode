function searchForRange(arr, target) {
  let right = getRightExtreme(arr, target);
  let left = getLetExtreme(arr, target);
  return [left, right];
}
function getRightExtreme(arr, target) {
  let rightExtreme = -1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    let currentElement = arr[middle];
    if (currentElement === target) {
      if (arr[middle + 1] !== target || middle == arr.length - 1) {
        rightExtreme = middle;
        break;
      }
      left = middle + 1;
    }
    if (currentElement < target) {
      left = middle + 1;
    }

    if (currentElement > target) {
      if (arr[middle - 1] === target) {
        rightExtreme = middle - 1;
        return rightExtreme;
      }
      right = middle - 1;
    }
  }
  return rightExtreme;
}
function getLetExtreme(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let leftExtreme = -1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let currentElement = arr[middle];
    if (currentElement === target) {
      if (arr[middle - 1] !== target || middle == 0) {
        leftExtreme = middle;
        break;
      }
      right = middle - 1;
    }
    if (currentElement < target) {
      if (arr[middle + 1] === target) {
        leftExtreme = middle + 1;
        break;
      }
      left = middle + 1;
    }
    if (currentElement > target) {
      right = middle - 1;
    }
  }
  return leftExtreme;
}
// Do not edit the line below.
exports.searchForRange = searchForRange;
