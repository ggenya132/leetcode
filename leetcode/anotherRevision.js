/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  function toggleEdge(vertex, edge) {
    ticketMap[vertex][edge] = !ticketMap[vertex][edge];
  }

  let adjacenyList = {};
  const ticketMap = {};
  tickets.forEach(([from, to]) => {
    (adjacenyList[from] = adjacenyList[from] || []).push(to);
  });
  for (key in adjacenyList) {
    ticketMap[key] = new Array(ticketMap[key].length).fill(true);
  }
  const numberOfAirports = Object.keys(adjacenyList).length;
  let smallestLexicalOrderingasString;
  let result;
  let visited = {};
  dfs("JFK");
  return result;
  function dfs(currentAirport, currentCandidate = [], amountSeen = 0) {
    //exit early
    if (
      smallestLexicalOrderingasString &&
      currentCandidate.join("") > smallestLexicalOrderingasString
    ) {
      return;
    }
    currentCandidate.push(currentAirport);

    if (amountSeen == tickets.length) {
      if (
        !smallestLexicalOrderingasString ||
        currentCandidate.join("") < smallestLexicalOrderingasString
      ) {
        smallestLexicalOrderingasString = currentCandidate.join("");
        result = [...currentCandidate];
        currentCandidate.pop();
        return;
      }
    }

    let adjacentAirports = adjacenyList[currentAirport];
    if (adjacentAirports) {
      for (let i = 0; i < adjacentAirports.length; i++) {
        if (ticketMap[currentAirport][i]) {
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

        // adjacenyList[currentAirport].push(adjacentAirport);
      }
    }
    currentCandidate.pop();
  }
};
