var combinationSum3 = function (k, n) {
  let choices = new Array(9).fill(0).map((i, index) => index + 1);

  let results = [];
  helper(choices);
  return results;
  function helper(initialChoices, currentCandidate = [], sum = 0) {
    if (sum === n && currentCandidate.length === k) {
      results.push([...currentCandidate]);
    }
    if (currentCandidate.length > k || !initialChoices.length) {
      return;
    }
    initialChoices.forEach((choice, index) => {
      let newSum = sum + choice;
      currentCandidate.push(choice);
      let newChoices = [...initialChoices.slice(1)];
      helper(newChoices, currentCandidate, newSum, false);
      currentCandidate.pop();
      initialChoices = [...initialChoices.slice(1)];
    });
  }
};
