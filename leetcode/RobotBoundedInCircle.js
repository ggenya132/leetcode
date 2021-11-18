/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let coordinates = [0, 0];
  let currentDirection = 90;

  const updateDirection = (instruction) => {
    if (instruction == "L") {
      currentDirection -= 90;
    }
    if (instruction == "R") {
      currentDirection += 90;
    }
  };

  const updateCoordinates = () => {
    let [x, y] = coordinates;
    if (currentDirection == 0) {
      x -= 1;
    }
    if (currentDirection == 90) {
      y += 1;
    }
    if (currentDirection == 180) {
      x -= 1;
    }
    if (currentDirection == 270) {
      y -= 1;
    }
    coordinates = [x, y];
  };

  for (let i = 0; i < instructions.length; i++) {
    let currentInstruction = instructions[i];
    if (currentDirection == "L" || currentDirection == "R") {
      updateDirection(currentDirection);
    } else {
      updateCoordinates();
      let [x, y] = coordinates;
      if (x == 0 && y == 0) {
        console.log("infinite");
      }
    }
  }
};

isRobotBounded("GGLLGG");
