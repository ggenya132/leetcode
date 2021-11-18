function knapsackProblem(items, capacity) {
  // Write your code here.
  // Replace return below.
  let values = new Array(items.length + 1).fill(0).map((i) => []);
  values[0] = new Array(capacity + 1).fill(0).map((i) => [0, []]);
  for (let row = 1; row < values.length; row++) {
    let [currentItemValue, currentItemWeight] = items[row - 1];
    for (let column = 0; column <= capacity; column++) {
      if (currentItemWeight <= column) {
        let [previousValueWithoutCapacityOfCurrentItem, constituents] =
          values[row - 1][column - currentItemWeight];
        let proposedValue =
          currentItemValue + previousValueWithoutCapacityOfCurrentItem;
        if (proposedValue > values[row - 1][column][0]) {
          let entry = [proposedValue, [row - 1, ...constituents]];
          values[row][column] = entry;
        } else {
          values[row][column] = values[row - 1][column];
        }
      } else {
        values[row][column] = values[row - 1][column];
      }
    }
  }
  let [value, con] = values[items.length][capacity];
  return [value, con];
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
