function sortStack(stack, i = 1) {
  // Write your code here.
  console.log("sort stack " + i);
  if (stack.length === 0) {
    return stack;
  }
  let top = stack.pop();
  sortStack(stack, i + 1);
  sortStackHelper(stack, top);
  return stack;
}

function sortStackHelper(stack, value, i = 0) {
  console.log("sort stack helper" + i);

  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }
  let top = stack.pop();
  sortStackHelper(stack, value, i + 1);
  stack.push(top);
}

// Do not edit the line below.
exports.sortStack = sortStack;
