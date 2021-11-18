/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let solutions = new Array(target + 1).fill(0).map((i) => []);
  candidates.forEach((candidate) => {
    for (let i = 1; i < solutions.length; i++) {
      if (candidate <= i) {
        if (i - candidate === 0) {
          //base case
          solutions[i].push([candidate]);
        } else {
          if (solutions[i - candidate].length) {
            let withOutCandidate = solutions[i - candidate];
            let newone = withOutCandidate.map((arr) => arr.map((i) => i));
            newone.forEach((sol) => {
              sol.push(candidate);
            });
            solutions[i] = [...solutions[i], ...newone];
          }
        }
      }
    }
  });

  return solutions[target];
};
