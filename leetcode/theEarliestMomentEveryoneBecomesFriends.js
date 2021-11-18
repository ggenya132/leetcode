/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  logs = logs.sort(
    (
      [timeStampA, ignoredOneA, ignoredTwoA],
      [timeStampB, ignoredOneB, ignoredTwoB]
    ) => timeStampA - timeStampB
  );

  let adjacencyList = {};
  let seen = {};
  for (let i = 0; i < logs.length; i++) {
    let [timeStamp, personOne, personTwo] = logs[i];
    if (adjacencyList.hasOwnProperty(personOne)) {
      adjacencyList[personOne].push(personTwo);
    } else {
      adjacencyList[personOne] = [];
      adjacencyList[personOne].push(personTwo);
    }
    if (adjacencyList.hasOwnProperty(personTwo)) {
      adjacencyList[personTwo].push(personOne);
    } else {
      adjacencyList[personTwo] = [];
      adjacencyList[personTwo].push(personOne);
    }

    dfs(personOne);

    if (Object.keys(seen).length == n) {
      return timeStamp;
    }
    seen = {};
  }
  return -1;

  function dfs(vertex) {
    if (seen[vertex]) {
      return;
    }
    seen[vertex] = true;
    let adjacentNodes = adjacencyList[vertex];
    adjacentNodes.forEach((adjacentNode) => {
      dfs(adjacentNode);
    });
  }
};
