var combinationSum = function (candidates, target) {
  let results = [];
  helper();
  console.log({ results });
  function helper(candidateSolution = [], currentSum = 0, start = 0) {
    console.log(candidateSolution);

    if (currentSum === target) {
      results.push([...candidateSolution]);
    }
    if (currentSum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      let candidate = candidates[i];
      let newSum = currentSum + candidate;
      candidateSolution.push(candidate);
      helper(candidateSolution, newSum, i);
      candidateSolution.pop();
    }
  }
};
