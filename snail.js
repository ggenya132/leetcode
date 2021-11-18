snail = function (array) {
  // enjoy
  const snail = [];
  while (array.length) {
    snail.push(...array[0]);
    for (let i = 1; i < array.length; i++) {
      snail.push(array[i][array[i].length - 1]);
    }
    const lastArrayWithoutLastElement = array[array.length - 1];
    lastArrayWithoutLastElement.pop();
    lastArrayWithoutLastElement.reverse();
    snail.push(...lastArrayWithoutLastElement);

    for (let i = array.length - 2; i > 0; i--) {
      snail.push(array[i][0]);
    }
    constrictArray(array);
  }

  function constrictArray(arr) {
    arr.pop();
    arr.shift();
    arr.forEach((array) => {
      array.pop();
      array.shift();
    });
  }

  return snail;
};
