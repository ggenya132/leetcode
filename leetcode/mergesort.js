//take two sorted arrays and
//return a sorted single array comprising of both elements
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
  console.log({ newArray });
}

function mergeArrayAlt(a1, a2) {
  let newArray = [];
  let currentElementFromArrayOne = null;
  let currentElementFromArrayTwo = null;
  while (a1.length && a2.length) {
    if (!currentElementFromArrayOne) {
      currentElementFromArrayOne = a1.shift();
    }
    if (!currentElementFromArrayTwo) {
      currentElementFromArrayTwo = a2.shift();
    }
    if (currentElementFromArrayOne < currentElementFromArrayTwo) {
      newArray.push(currentElementFromArrayOne);
      currentElementFromArrayOne = null;
    } else if (currentElementFromArrayTwo < currentElementFromArrayOne) {
      newArray.push(currentElementFromArrayTwo);
      currentElementFromArrayTwo = null;
    } else if (currentElementFromArrayTwo == currentElementFromArrayOne) {
      newArray.push(currentElementFromArrayOne, currentElementFromArrayTwo);
      currentElementFromArrayTwo = null;
      currentElementFromArrayOne = null;
    }

    console.log({ currentElementFromArrayOne, currentElementFromArrayTwo });
    console.log({ a1, a2 });
  }
  if (currentElementFromArrayOne) {
    newArray.push(currentElementFromArrayOne);
  }
  if (currentElementFromArrayTwo) {
    newArray.push(currentElementFromArrayTwo);
  }
  console.log({ a1, a2 });
  if (a1.length) {
    newArray.push(...a1);
  } else if (a2.length) {
    newArray.push(...a2);
  }
  return newArray;
}

//take two sorted arrays and
//return a sorted single array comprising of both elements
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
    console.log({ newArray });
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
  return mergeArrays(left, right);
}
