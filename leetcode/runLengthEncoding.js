function encode(string) {
  let currentChar = string[0];
  let currentCount = 1;
  let res = "";
  for (let i = 1; i < string.length - 1; i++) {
    if (string[i] !== string[i + 1]) {
      res += `${++currentCount}${currentChar}`;
      currentChar = string[i + 1];
      currentCount = 1;
    } else {
      currentCount++;
    }
  }
  res += `${currentCount}${currentChar}`;
  return res;
}

function decode(string) {
  let res = "";
  for (let i = 0; i < string.length - 1; i += 2) {
    let char = string[i + 1];
    let amount = string[i];
    res += char.repeat(amount);
  }
  return res;
}
