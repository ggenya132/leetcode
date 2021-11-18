/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function (root) {
  let [h, d] = helper(root);
  return d;
};
function helper(root) {
  console.log({ val: root.val });
  if (!root.children.length) {
    return [1, 0];
  }

  //todo
  let allChildrensHeightsAndDiameters = root.children.map((child) =>
    helper(child)
  );
  //todo, sort by height,
  //find greatest path by taking first two elements from sorted children
  allChildrensHeightsAndDiameters.sort(([heightOne], [heightTwo]) => {
    return heightTwo - heightOne;
  });
  console.log({ allChildrensHeightsAndDiameters });
  let heightOne = allChildrensHeightsAndDiameters[0][0];
  let heightTwo;
  if (allChildrensHeightsAndDiameters[1]) {
    heightTwo = allChildrensHeightsAndDiameters[1][0];
  } else {
    heightTwo = 0;
  }

  console.log({ heightOne });
  console.log({ heightTwo });
  let currentLongestPath = heightOne + heightTwo;
  console.log({ currentLongestPath });
  let currentHeight = heightOne + 1;

  allChildrensHeightsAndDiameters.sort(
    ([heightOne, dOne], [heightTwo, dTwo]) => {
      return dTwo - dOne;
    }
  );
  console.log({ allChildrensHeightsAndDiameters });
  let tallestDiameter = allChildrensHeightsAndDiameters[0][1];
  return [currentHeight, Math.max(tallestDiameter, currentLongestPath)];
}
