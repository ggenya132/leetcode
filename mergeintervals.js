/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  intervals = intervals.sort(([mina, maxa], [minb, maxb]) => mina - minb);

  let currentInterval = undefined;
  let mergedIntervals = [];
  const canBeMerged = ([mina, maxa], [minb, maxb]) => {
    if (minb <= maxa) {
      return true;
    }
  };

  const mergeIntervals = ([mina, maxa], [minb, maxb]) => {
    const newMin = Math.min(mina, minb);
    const newMax = Math.max(maxa, maxb);
    return [newMin, newMax];
  };
  for (let i = 0; i < intervals.length; i++) {
    if (!currentInterval) {
      currentInterval = intervals[i];
    } else {
      if (canBeMerged(currentInterval, intervals[i])) {
        currentInterval = mergeIntervals(currentInterval, intervals[i]);
      } else {
        mergedIntervals.push(currentInterval);
        currentInterval = intervals[i];
      }
    }
  }
  mergedIntervals.push(currentInterval);
  return mergedIntervals;
};
