let stringSearch = (a, b) => {
  let count = 0;
  for (let i = 0; i <= a.length - b.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let currentChar = a[j + i];
      console.log({ currentChar });
      if (currentChar === b[j]) {
        console.log({ j });
        if (j == b.length - 1) {
          count++;
        }
        continue;
      } else {
        break;
      }
    }
  }
  return count;
};
