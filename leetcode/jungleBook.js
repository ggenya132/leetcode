const predatorsExampleOne = [-1, 8, 6, 0, 7, 3, 8, 9, -1, 6];
const predatorsExampleTwo = [-1, 0, 1];
function jungleBook(predators) {
  const adjacenyList = {};
  const indegrees = {};
  for (let i = 0; i < predators.length; i++) {
    adjacenyList[i] = [];
    indegrees[i] = 0;
  }
  console.log({ adjacenyList });
  predators.forEach((predatorOfAnimal, animal) => {
    if (predatorOfAnimal != -1) {
      adjacenyList[predatorOfAnimal].push(animal);
    }
  });
  for (const currentAnimal in adjacenyList) {
    const animalsEatenByAnimal = adjacenyList[currentAnimal];
    animalsEatenByAnimal.forEach((eatenAnimal) => {
      indegrees[eatenAnimal] = indegrees[eatenAnimal] + 1;
    });
  }
  const visited = {};
  const queue = [];
  const ordering = [];
  for (animal in indegrees) {
    if (indegrees[animal] === 0) {
      queue.push(animal);
    }
  }

  while (queue.length) {
    let currentGroup = [];
    let currentLevelLength = queue.length;
    for (let i = 0; i < currentLevelLength; i++) {
      let currentPredator = queue.shift();
      currentGroup.push(currentPredator);
      let predatedAnimals = adjacenyList[currentPredator];
      predatedAnimals.forEach((predatedAnimal) => {
        if (!visited[predatedAnimal]) {
          visited[predatedAnimal] = true;
          queue.push(predatedAnimal);
        }
      });
    }
    ordering.push([...currentGroup]);
  }
  console.log({ ordering });
  return ordering.length;
}
jungleBook(predatorsExampleOne);
jungleBook(predatorsExampleTwo);
