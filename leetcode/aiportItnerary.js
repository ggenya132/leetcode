/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let adjacenyList = {};
  const ticketMap = {};
  tickets.forEach(([from, to]) => {
    (adjacenyList[from] = adjacenyList[from] || []).push(to);
  });
  for (key in adjacenyList) {
    ticketMap[key] = new Array(adjacenyList[key].length).fill(true);
  }
  Object.entries(adjacenyList).forEach(([key, value]) => {
    value.sort((a, b) => (a < b ? -1 : 1));
  });

  let result;
  dfs("JFK");
  return result;

  function dfs(currentAirport, currentCandidate = [], amountSeen = 0) {
    currentCandidate.push(currentAirport);

    if (amountSeen == tickets.length) {
      result = [...currentCandidate];
      currentCandidate.pop();
      return true;
    }

    let adjacentAirports = adjacenyList[currentAirport];
    if (adjacentAirports) {
      for (let i = 0; i < adjacentAirports.length; i++) {
        if (ticketMap[currentAirport][i]) {
          let adjacentAirport = adjacentAirports[i];
          toggleEdge(currentAirport, i);
          let hasCandidate = dfs(
            adjacentAirport,
            currentCandidate,
            amountSeen + 1
          );
          if (hasCandidate) {
            return true;
          }
          toggleEdge(currentAirport, i);
        }
      }
    }
    currentCandidate.pop();
  }

  function toggleEdge(vertex, edge) {
    ticketMap[vertex][edge] = !ticketMap[vertex][edge];
  }
};
