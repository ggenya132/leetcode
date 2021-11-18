/**
 * @param {number[]} nums
 * @return {number}
 */
//attempt one
var jump = function (nums) {
  let res = {};
  helper(0, 0);
  return res[nums.length - 1];
  console.log(res);
  function helper(currentIndex, currentDistance) {
    if (currentIndex > nums.length - 1) {
      return;
    }
    if (res[currentIndex] && currentDistance >= res[currentIndex]) {
      return;
    }
    if (!res[currentIndex] || currentDistance < res[currentIndex]) {
      res[currentIndex] = currentDistance;
    }

    let jumpAbility = nums[currentIndex];

    for (let i = 1; i <= jumpAbility; i++) {
      helper(currentIndex + i, currentDistance + 1);
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//attempt 2
var jump = function (nums) {
  if (nums.length == 1) {
    return 0;
  }
  if (nums.length == 2) {
    return 1;
  }
  let dp = new Array(nums.length).fill(Infinity);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < nums.length; i++) {
    let prev = i - 1;
    while (prev >= 0) {
      if (nums[prev] + prev >= i) {
        dp[i] = Math.min(dp[i], dp[prev] + 1);
      }
      prev--;
    }
  }
  return dp.pop();
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//attempt 3
var jump = function (nums) {
  let mem = { 0: 0, 1: 1 };
  if (nums.length == 1 || nums.length == 2) {
    return nums.length == 1 ? 0 : 1;
  }
  return helper(nums.length - 1);

  function helper(index) {
    if (mem[index] != undefined) {
      return mem[index];
    }
    let min = Infinity;
    for (let i = index - 1; i >= 0; i--) {
      if (nums[i] + i >= index) {
        let minValue = helper(i);
        min = Math.min(min, minValue + 1);
      }
    }
    mem[index] = min;
    return min;
  }
};

var jump = function (nums) {
  let q = [[0, 0]];
  let visited = { 0: true };
  while (q.length) {
    let [currentIndex, currentJumps] = q.shift();

    if (currentIndex == nums.length - 1) {
      return currentJumps;
    }
    for (let i = 1; i <= nums[currentIndex]; i++) {
      let candidateIndex = currentIndex + i;
      if (!visited[candidateIndex]) {
        visited[candidateIndex] = true;
        q.push([candidateIndex, currentJumps + 1]);
      }
    }
  }
};

//As you may notice, we are using a greedy approach: always jump to the place that will take us the farthest. Greedy algorithms always make locally optimal decisions, which may or may not lead to the globally optimal solution. Therefore, we must test our greedy algorithm to see if we can prove that it leads to the globally optimal solution.
