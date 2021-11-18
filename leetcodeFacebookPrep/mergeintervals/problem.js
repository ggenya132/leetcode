/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// TODO: evaluate gretest
var merge = function (intervals) {
  //   intervals = intervals.sort(([mina, minb], [maxa, maxb]) => mina - minb);
  const results = [];
  let [currentMin, currentMax] = intervals[0];
  results.push([currentMin, currentMax]);
  for (let i = 1; i < intervals.length; i++) {
    let [tempMin, tempMax] = intervals[i];
    if (tempMin <= results[results.length - 1][1]) {
      results[results.length - 1][1] =
        tempMax > results[results.length - 1][1]
          ? tempMax
          : results[results.length - 1][1];
      results[results.length - 1][0] =
        tempMin < results[results.length - 1][0]
          ? tempMin
          : results[results.length - 1][0];
    } else {
      results.push([tempMin, tempMax]);
    }
  }
  return results;
};

const input = [
  [1, 4],
  [0, 4],
];
const results = merge(input);

console.log({ results });
