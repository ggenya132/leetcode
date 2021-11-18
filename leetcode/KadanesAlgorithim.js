function kadanesAlgorithm(array) {
  // Write your code here.
  let maxSoFar = (maxHere = array[0]);
  for (let i = 1; i < array.length; i++) {
    maxHere = Math.max(array[i], maxHere + array[i]);
    maxSoFar = Math.max(maxSoFar, maxHere);
  }
  return maxSoFar;
}
