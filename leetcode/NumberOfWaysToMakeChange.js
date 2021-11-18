function numberOfWaysToMakeChange(n, denoms) {
  let ways = new Array(n + 1);
  ways.fill(0);
  ways[0] = 1;
  denoms.forEach(buildAmountOfWaysToMakeChangeForDenom);
  return ways[n];
  function buildAmountOfWaysToMakeChangeForDenom(denom) {
    for (
      let currentChangeTarget = 1;
      currentChangeTarget <= n;
      currentChangeTarget++
    ) {
      if (denom <= currentChangeTarget) {
        //this is the most important part
        // given that you have a demonimation in hand, like say five dollars, and a target, like six,
        // if you remove the current denomation from your target, like 6 - 5, you need a dollar to get six, right?
        // well, add how many ways you currently have to make 1 (6 - 5), to six, in other words, one. the only means you have
        // to make six dollar is by adding one to five, but you only have ONE way to make one, therefore, you only currently have
        // ONE way to make six
        ways[currentChangeTarget] += ways[currentChangeTarget - denom];
      }
    }
  }
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
