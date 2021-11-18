/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let edges = {};
    const indegrees = {};
    for (let i = 0; i < n; i++) {
      edges[i] = [];
      indegrees[i] = 0;
    }

    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        if (i == j) {
          continue;
        }
        if (knows(i, j)) {
          edges[i].push(j);
        }
        if (knows(j, i)) {
          edges[j].push(i);
        }
      }
    }

    let res = -1;
    let count = 0;
    let candidate;
    for (const person in edges) {
      let peopleKnown = edges[person];
      peopleKnown.forEach((personKnown) => {
        indegrees[personKnown]++;
      });
      if (!peopleKnown.length) {
        candidate = person;
      }
    }

    return candidate && indegrees[candidate] == n - 1 ? candidate : -1;
  };
};
