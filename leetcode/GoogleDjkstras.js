let routes = [
  ["DSM", "ORD"],
  ["ORD", "BGI"],
  ["BGI", "LGA"],
  ["SIN", "CDG"],
  ["CDG", "SIN"],
  ["CDG", "BUD"],
  ["DEL", "DOH"],
  ["DEL", "CDG"],
  ["TLV", "DEL"],
  ["EWR", "HND"],
  ["HND", "ICN"],
  ["HND", "JFK"],
  ["ICN", "JFK"],
  ["JFK", "LGA"],
  ["EYW", "LHR"],
  ["LHR", "SFO"],
  ["SFO", "SAN"],
  ["SFO", "DSM"],
  ["SAN", "EYW"],
];

class Q {
  constructor() {
    this.q = [];
  }
  insert(item) {
    this.q.push(item);
    this.sort();
  }
  shift() {
    return this.q.shift();
  }
  sort() {
    this.q = this.q.sort((a, b) => a[1] - b[1]);
  }
}

function findShortedRoute(starting, routes) {
  let edges = {};

  //build edges

  for (let i = 0; i < routes.length; i++) {
    //dsm -> ord
    let [from, to] = routes[i];
    if (!edges[from]) {
      edges[from] = [];
    }
    edges[from].push([to, 1]);
  }

  //creates distances
  const distances = { ...edges };

  for (const airport in distances) {
    distances[airport] = Infinity;
  }

  //put starting with distance zero

  let q = new Q();

  q.insert([starting, 0]);
  while (q.q.length) {
    let [currentPath, currentPathDistance] = q.shift();
    console.log({ currentPath, currentPathDistance });
    let adjacentPaths = edges[currentPath];
    console.log({ adjacentPaths });
    if (adjacentPaths) {
      adjacentPaths.forEach(([adjacentPath, adjacentDistance]) => {
        console.log("hello");
        let newCandidatePath = currentPathDistance + adjacentDistance;
        if (distances[adjacentPath] > newCandidatePath) {
          distances[adjacentPath] = newCandidatePath;
          q.push([adjacentPath, newCandidatePath]);
        }
      });
    }
  }

  //return distance if possible
  console.log({ distances });
  return distances[starting] === Infinity ? -1 : distances[starting];
}
const d = findShortedRoute("LGA", routes);
console.log({ d });
