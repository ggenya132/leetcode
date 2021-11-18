function getPINs(observed) {
  // TODO: This is your job, detective!
  const adjacentMap = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 7, 5],
    5: [4, 2, 5, 8, 6],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [7, 5, 8, 9, 0],
    9: [6, 9, 8],
    0: [0, 8],
  };
  const observedPins = observed.split("").map((int) => parseInt(int));
  for(let i = 0; i <observedPins.length; i++){
    let currentPin = observedPins[i];
    let adjacentNumbers = adjacentMap[currentPin];
    for(let )
  }
}
