function getMilestoneDays(revenues, milestones) {
  //maintain original index of milestone
  //space(m)
  const hash = milestones.reduce((acc, next, index) => {
    acc[next] = index;
    return acc;
  }, {});
  //o(m log m)
  //o(n)
  //o (m)
  milestones.sort((m1, m2) => m1 - m2);
  let res = [];
  let k = 0;
  let total = 0;
  for (let i = 0; i < revenues.length; i++) {
    total += revenues[i];
    while (k < milestones.length && total >= milestones[k]) {
      res[hash[milestones[k]]] = i + 1;
      k++;
    }
  }

  //handle never reaching milestone
  for (let i = 0; i < milestones.length; i++) {
    if (!res[i]) {
      //we never reached the milestone
      res[i] = -1;
    }
  }

  //O(m log m + n);
  return res;
}
