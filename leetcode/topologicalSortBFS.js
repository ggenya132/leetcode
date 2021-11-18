/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let edges = new Array(numCourses).fill(0).map((i) => []);

  prerequisites.forEach(([course, prereq]) => {
    edges[prereq].push(course);
  });

  let inBoundEdges = {};
  edges.forEach((courses) => {
    courses.forEach((course) => {
      inBoundEdges[course] = inBoundEdges[course]
        ? inBoundEdges[course] + 1
        : 1;
    });
  });

  let qOrder = [];
  let processNext = [];
  edges.forEach((adjacentNodes, node) => {
    if (!inBoundEdges.hasOwnProperty(node)) {
      qOrder.push(node);
      processNext.push(node);
    }
  });

  while (processNext.length) {
    let currentNode = processNext.pop();
    let adjacentNodes = edges[currentNode];
    adjacentNodes.forEach((adjacentNode) => {
      inBoundEdges[adjacentNode] = inBoundEdges[adjacentNode] - 1;
      if (inBoundEdges[adjacentNode] == 0) {
        qOrder.push(adjacentNode);
        processNext.push(adjacentNode);
      }
    });
  }

  console.log(qOrder);
  return qOrder.length === numCourses;
};



public ArrayList<DirectedGraphNode> topSort(ArrayList<DirectedGraphNode> graph) {

  ArrayList<DirectedGraphNode> result = new ArrayList<>();
    if (graph == null || graph.size() == 0) {
      return result;
    }
  Map<DirectedGraphNode, Integer> indegree = new HashMap<DirectedGraphNode, Integer>();
  Queue<DirectedGraphNode> queue = new LinkedList<DirectedGraphNode>();

//mapping node to its indegree to the HashMap, however these nodes
//have to be directed to by one other node, nodes whose indegree == 0
//would not be mapped.
  for (DirectedGraphNode DAGNode : graph){
      for (DirectedGraphNode nei : DAGNode.neighbors){
          if(indegree.containsKey(nei)){
              indegree.put(nei, indegree.get(nei) + 1);
          } else {
              indegree.put(nei, 1);
          }
      }
  }


//find all nodes with indegree == 0. They should be at starting positon in the result
  for (DirectedGraphNode GraphNode : graph) {
      if (!indegree.containsKey(GraphNode)){
          queue.offer(GraphNode);
          result.add(GraphNode);
      }
  }


// //everytime we poll out a node from the queue, it means we delete it from the 
// //graph, we will minus its neighbors indegree by one, this is the same meaning 
// //as we delete the edge from the node to its neighbors.
//   while (!queue.isEmpty()) {
//       DirectedGraphNode temp = queue.poll();
//       for (DirectedGraphNode neighbor : temp.neighbors){
//           indegree.put(neighbor, indegree.get(neighbor) - 1);
//           if (indegree.get(neighbor) == 0){
//               result.add(neighbor);
//               queue.offer(neighbor);
//           }
//       }
//   }
//   return result;
// }