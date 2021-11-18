function getElementByClass(
  classString,
  childNodes = document.childNodes,
  nodeList = []
) {
  for (let i = 0; i < childNodes.length; i++) {
    let currentChildNode = childNodes[i];
    if (nodeContainsClass(currentChildNode, classString)) {
      nodeList.push(currentChildNode);
    } else {
      if (currentChildNode.hasChildNodes()) {
        getElementByClass(classString, currentChildNode.childNodes, nodeList);
      }
    }
  }

  function nodeContainsClass(node, classString) {
    const nodeHasClass = node.classList && node.classList.contains(classString);
    return nodeHasClass;
  }
  return nodeList;
}
