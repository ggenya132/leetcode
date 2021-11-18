const isRobotBounded = (instructions) => {
  //nesw 0123
  let dir = 0;
  let dx = 0;
  let dy = 0;
  let xInstructions = [0, 1, 0, -1];
  let yInstructions = [1, 0, -1, 0];

  instructions.split("").forEach((instruction) => {
    if (instruction == "L" || instruction == "R") {
      if (instruction == "L") {
        dir = dir == 0 ? 3 : dir - 1;
      }
      if (instruction == "R") {
        dir = dir == 3 ? 0 : dir + 1;
      }
    } else {
      dx += xInstructions[dir];
      dy += yInstructions[dir];
    }
  });
  return (dx == 0 && dy == 0) || dir !== 0;
};
