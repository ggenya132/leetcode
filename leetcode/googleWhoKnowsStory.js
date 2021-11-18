function peopleWhoKnowStory(meetings, sourceIndividual) {
  let adjacenyList = {};
  meetings.forEach(([personOne, personTwo, time]) => {
    (adjacenyList[personOne] = adjacenyList[personOne] || []).push([
      personTwo,
      time,
    ]);
    (adjacenyList[personTwo] = adjacenyList[personTwo] || []).push([
      personOne,
      time,
    ]);
  });
  console.log({ adjacenyList });
  let res = [];
  let q = [[sourceIndividual, 0]];
  let visited = { [sourceIndividual]: true };
  while (q.length) {
    let [contaminatedIndivual, timeOfInfection] = q.shift();
    res.push(contaminatedIndivual);
    let contaminatedFriends = adjacenyList[contaminatedIndivual];
    [contaminatedIndivual];
    if (contaminatedFriends) {
    }
    contaminatedFriends.forEach(([contaminatedFriend, timeOfFriendMeeting]) => {
      if (
        !visited[contaminatedFriend] &&
        timeOfFriendMeeting >= timeOfInfection
      ) {
        visited[contaminatedFriend] = true;
        q.push([contaminatedFriend, timeOfFriendMeeting]);
      }
    });
  }
  return res;
}

let exampleOne = [
  [1, 2, 100],
  [3, 4, 200],
  [1, 3, 300],
  [2, 5, 400],
];

let exampleTwo = [
  [1, 2, 100],
  [2, 3, 100],
  [4, 5, 100],
];

const testOne = peopleWhoKnowStory(exampleOne, 1);
const testTwo = peopleWhoKnowStory(exampleTwo, 2);
console.log(testOne);
console.log(testTwo);
