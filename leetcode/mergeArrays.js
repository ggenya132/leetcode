function mergeArrays(a1, a2) {
  let i = 0;
  let j = 0;
  const newArray = [];
  while (i < a1.length && j < a2.length) {
    let currentElementFromArrayOne = a1[i];
    let currentElementFromArrayTwo = a2[j];
    if (currentElementFromArrayOne > currentElementFromArrayTwo) {
      newArray.push(currentElementFromArrayTwo);
      j++;
    } else {
      newArray.push(currentElementFromArrayOne);
      i++;
    }
  }

  newArray.push(...a2.slice(j));
  newArray.push(...a1.slice(i));
  return newArray;
}

function mergeSort(arr) {
  function mergeArrays(a1, a2) {
    let i = 0;
    let j = 0;
    const newArray = [];
    while (i < a1.length && j < a2.length) {
      let currentElementFromArrayOne = a1[i];
      let currentElementFromArrayTwo = a2[j];
      if (currentElementFromArrayOne < currentElementFromArrayTwo) {
        newArray.push(currentElementFromArrayOne);
        i++;
      } else if (currentElementFromArrayOne === currentElementFromArrayTwo) {
        newArray.push(currentElementFromArrayTwo);
        newArray.push(currentElementFromArrayOne);
        i++;
        j++;
      } else {
        newArray.push(currentElementFromArrayTwo);
        j++;
      }
    }
    if (i === a1.length) {
      newArray.push(...a2.slice(j));
    } else {
      newArray.push(...a1.slice(i));
    }
    return newArray;
  }
  if (arr.length <= 1) {
    //one or less elements, aka base case
    return arr;
  }
  //other wise continue till we can compare just one to one element
  // all subsequent merges will be sorted
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log({ left, right });
  return mergeArrays(left, right);
}
