/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // if(n == 1 || k == 1){
  //     return [[1]]
  // }
  return backtrack();
  function backtrack(start = 1, combination = [], res = []) {
    if (combination.length == k) {
      res.push([...combination]);
    }
    for (let i = start; i <= n; i++) {
      combination.push(i);
      //apply constraint
      backtrack(i + 1, combination, res);
      //revert state!!
      combination.pop();
    }
    return res;
  }
};
