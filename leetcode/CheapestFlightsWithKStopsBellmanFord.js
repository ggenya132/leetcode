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
