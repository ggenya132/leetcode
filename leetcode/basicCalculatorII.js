/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  //todo: fix this shit tomorrow
  if (s.length == 1) {
    return s;
  }
  let functions = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => Math.floor(x / y),
  };
  const sanitizedInput = s.trim().replaceAll(" ", "");
  let parsedInput = [];
  let prev = "";
  let left = 0;
  console.log({ sanitizedInput });
  while (left < sanitizedInput.length) {
    console.log();
    if (!functions[sanitizedInput[left]]) {
      prev += sanitizedInput[left];
    } else {
      parsedInput.push(parseInt(prev));
      parsedInput.push(sanitizedInput[left]);
      prev = "";
    }
    left++;
  }
  parsedInput.push(parseInt(prev));

  let hasOperation = parsedInput.some((char) => functions[char] != undefined);
  if (!hasOperation) {
    return s;
  }

  return helper(parsedInput);
  function calc(x, y, op) {
    return functions[op](x, y);
  }
  function helper(s) {
    // console.log(s)
    if (s.length == 1) {
      return s[0];
    }
    let currentInt = s[0];
    let operation = s[1];
    let res = helper(s.slice(2));
    console.log({ res, currentInt });
    const final = calc(currentInt, res, operation);

    return final;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let functions = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => Math.floor(x / y),
  };
  const sanitizedInput = s.trim().replaceAll(" ", "");
  let parsedInput = [];
  let prev = "";
  let left = 0;
  while (left < sanitizedInput.length) {
    console.log();
    if (!functions[sanitizedInput[left]]) {
      prev += sanitizedInput[left];
    } else {
      parsedInput.push(parseInt(prev));
      parsedInput.push(sanitizedInput[left]);
      prev = "";
    }
    left++;
  }
  parsedInput.push(parseInt(prev));

  let hasOperation = parsedInput.some((char) => functions[char] != undefined);
  if (!hasOperation) {
    return s;
  }

  let currentOp = "+";
  let stack = [];
  let res = 0;
  prev = undefined;
  parsedInput.forEach((item, index) => {
    if (isNaN(item) || index == parsedInput.length - 1) {
      if (currentOp == "+") {
        stack.push(prev);
      }
      if (currentOp == "-") {
        stack.push(prev * -1);
      }
      if (currentOp == "/") {
        stack.push(stack.pop() / prev);
      }

      if (currentOp == "*") {
        stack.push(stack.pop() * prev);
      }
      currentOp = item;
    } else {
      prev = item;
    }
  });
  console.log(stack);
};

\

var calculate = function (s) {
  let functions = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => Math.floor(x / y),
  };
  const sanitizedInput = s.trim().replaceAll(" ", "");
  let parsedInput = [];
  let prev = "";
  let left = 0;
  while (left < sanitizedInput.length) {
    if (!functions[sanitizedInput[left]]) {
      prev += sanitizedInput[left];
    } else {
      parsedInput.push(parseInt(prev));
      parsedInput.push(sanitizedInput[left]);
      prev = "";
    }
    left++;
  }
  parsedInput.push(parseInt(prev));

  let hasOperation = parsedInput.some((char) => functions[char] != undefined);
  if (!hasOperation) {
    return s;
  }

  let currentOp = "+";
  let stack = [];
  let res = 0;
  prev = undefined;
  parsedInput.forEach((item, index) => {
    // console.log(stack)
    if (isNaN(item)) {
      if (currentOp == "+") {
        stack.push(prev);
      }
      if (currentOp == "-") {
        stack.push(prev * -1);
      }
      if (currentOp == "/") {
        stack.push(Math.trunc(stack.pop() / prev));
      }

      if (currentOp == "*") {
         // console.log('hello')
        stack.push(stack.pop() * prev);
      }
      currentOp = item;
    } else {
      prev = item;
    }
  });
    
    if (currentOp == "+") {
        stack.push(prev);
      }
      if (currentOp == "-") {
        stack.push(prev * -1);
      }
      if (currentOp == "/") {
        stack.push(Math.trunc(stack.pop() / prev));
      }

      if (currentOp == "*") {
          console.log('hello')
        stack.push(stack.pop() * prev);
      }
    while(stack.length){
        res += stack.pop();
    }
    return res;
};
