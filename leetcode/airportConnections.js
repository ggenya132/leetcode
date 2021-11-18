function airportConnections(airports, routes, startingAirport) {
  // Write your code here.

  let graph = getGraph(airports, routes);
  let unreachableAirports = getUnreachableAirports(
    startingAirport,
    graph,
    airports
  );
  addReachableAirportsToUnreachableAirports(unreachableAirports, graph);
  return getMinimiumNumber(unreachableAirports, graph);
  function getGraph(airports, routes) {
    let edges = {};
    for (let i = 0; i < airports.length; i++) {
      edges[airports[i]] = new AirportNode(airports[i]);
    }
    routes.forEach(([from, to]) => {
      edges[from].connections.push(to);
    });
    return edges;
  }
  function getUnreachableAirports(startingAirport, graph, airports) {
    let visited = {};
    let res = [];
    depthFirstUnreachable(startingAirport, graph, visited);
    for (let airport of airports) {
      if (!visited[airport]) {
        graph[airport].isReachable = false;
        res.push(graph[airport]);
      }
    }
    return res;
  }
  function depthFirstUnreachable(starting, graph, visited) {
    visited[starting] = true;
    let { connections } = graph[starting];
    connections.forEach((connection) => {
      if (!visited[connection]) {
        depthFirstUnreachable(connection, graph, visited);
      }
    });
  }
  function addReachableAirportsToUnreachableAirports(
    unreachableAirports,
    graph
  ) {
    for (const unreachableAirport of unreachableAirports) {
      let connections = [];
      depthFirstAddReachableAirportsToUnreachableAirports(
        unreachableAirport.airport,
        graph,
        connections,
        {}
      );
      unreachableAirport.otherReachableAirports = connections;
    }
  }
  function depthFirstAddReachableAirportsToUnreachableAirports(
    unreachableAirport,
    graph,
    connections,
    visited
  ) {
    if (unreachableAirport.isReachable || visited[unreachableAirport]) {
      return;
    }
    visited[unreachableAirport] = true;
    connections.push(unreachableAirport);

    graph[unreachableAirport].connections.forEach((otherAirport) => {
      depthFirstAddReachableAirportsToUnreachableAirports(
        otherAirport,
        graph,
        connections,
        visited
      );
    });
  }
  function getMinimiumNumber(unreachableAirports, graph) {
    unreachableAirports.sort((a, b) => {
      return b.otherReachableAirports.length - a.otherReachableAirports.length;
    });
    let numberOfConnectionsNeed = 0;
    for (const unreachableAirport of unreachableAirports) {
      if (unreachableAirport.isReachable) {
        continue;
      }
      numberOfConnectionsNeed++;
      const { otherReachableAirports } = unreachableAirport;
      otherReachableAirports.forEach((otherReachableAirport) => {
        graph[otherReachableAirport].isReachable = true;
      });
    }
    return numberOfConnectionsNeed;
  }
}

class AirportNode {
  constructor(airport) {
    this.airport = airport;
    this.connections = [];
    this.otherReachableAirports = [];
    this.isReachable = true;
  }
}

// Do not edit the line below.
exports.airportConnections = airportConnections;
