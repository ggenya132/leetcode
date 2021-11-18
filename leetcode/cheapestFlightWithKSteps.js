/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adjacencyList = {};
  flights.forEach(([u, v, cost]) => {
    (adjacencyList[u] = adjacencyList[u] || []).push([v, cost]);
  });
  let costs = new Array(n).fill(Infinity);
  costs[src] = 0;
  let q = [[src, 0, -1]];
  while (q.length) {
    //applying non 'greedy' djkstras allows you to consider non optimal edges
    //therefore, you will discovery nodes in a breadth first manner
    //while this is unideal typically, this allows you to consider every edge
    //in this problem, this works because even if getting to node v from u is
    //cheaper than than getting to node v from z, it doesn't matter if you've used all your 'stops'
    //therefore, greedy approach will not work as you wont consider the scenario in which getting to v costs more but ultimately less
    //since you want to get to the dst anyway from v,
    let [currentAirport, currentCost, currentStops] = q.shift();
    if (currentAirport == dst) {
      return currentCost;
    }
    let adjacentAirports = adjacencyList[currentAirport];
    if (adjacentAirports) {
      adjacentAirports.forEach(([airport, cost]) => {
        let newCandidateCost = currentCost + cost;
        let newAmountOfStops = currentStops + 1;
        if (newCandidateCost < costs[airport] && newAmountOfStops <= k) {
          costs[airport] = newCandidateCost;
          q.push([airport, newCandidateCost, newAmountOfStops]);
        }
      });
    }
  }
  return costs[dst] === Infinity ? -1 : costs[dst];
};

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let prev = new Array(n).fill(Infinity);
  let curr = [...prev];
  prev[src] = 0;
  curr[src] = 0;

  for (let i = 0; i < k + 1; i++) {
    flights.forEach(([from, to, price]) => {
      //If we were able to get to the 'from' airport in the previous iteration,
      //Then check if now using the 'from' plus its weight is a smaller cost
      if (prev[from] < Infinity) {
        curr[to] = Math.min(curr[to], prev[from] + price);
      }
    });
    prev = [...curr];
  }
  return curr[dst] == Infinity ? -1 : curr[dst];
};

var findCheapestPrice = function (n, flights, src, dst, k) {
  const adjacencyList = {};
  flights.forEach(([u, v, cost]) => {
    (adjacencyList[u] = adjacencyList[u] || []).push([v, cost]);
  });
  let costs = new Array(n).fill(Infinity);
  const steps = new Array(n).fill(Infinity);
  costs[src] = 0;
  steps[src] = 0;
  let q = [[src, 0, -1]];
  while (q.length) {
    q.sort((a, b) => a[1] - b[1]);
    let [currentAirport, currentCost, currentStops] = q.shift();
    if (currentAirport == dst) {
      return currentCost;
    }
    let adjacentAirports = adjacencyList[currentAirport];
    if (adjacentAirports) {
      adjacentAirports.forEach(([airport, cost]) => {
        let newCandidateCost = currentCost + cost;
        let newAmountOfStops = currentStops + 1;
        //consider if cost is better
        if (newCandidateCost < costs[airport] && newAmountOfStops <= k) {
          costs[airport] = newCandidateCost;
          q.push([airport, newCandidateCost, newAmountOfStops]);
        }
        //also consider if the amount of steps taken to get here is better
        else if (newAmountOfStops <= k && newAmountOfStops < steps[airport]) {
          q.push([airport, newCandidateCost, newAmountOfStops]);
        }
        steps[airport] = newAmountOfStops;
      });
    }
  }
  return costs[dst] === Infinity ? -1 : costs[dst];
};
