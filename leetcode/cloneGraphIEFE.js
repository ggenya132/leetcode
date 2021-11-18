var cloneGraph = function (node) {
  return !node
    ? node
    : (function (node, hash) {
        //check if hash has node, return if true
        if (hash[node.val]) {
          return hash[node.val];
        }
        //else clone node with new one, add to hash

        let clone = new Node(node.val);
        hash[node.val] = clone;
        //for all neighbors of node, call clone node on node and push into neighbors array
        node.neighbors.forEach((neighbor) => {
          clone.neighbors.push(cloneNode(neighbor, hash));
        });

        //return vertex node
        return clone;
      })(node, {});
};
