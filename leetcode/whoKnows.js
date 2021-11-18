function whoKnows(meetings, personId) {
  let edges = [];
  console.log({ meetings });
  for (let i = 0; i < meetings.length; i++) {
    let [personOne, personTwo, time] = meetings[i];
    if (!edges[personOne]) {
      edges[personOne] = [];
    }
    edges[personOne].push([personTwo, time]);
    if (!edges[personTwo]) {
      edges[personTwo] = [];
    }
    edges[personTwo].push([personOne, time]);
  }

  let results = [];
  let q = [[personId, 0]];
  let seen = {};
  seen[personId] = true;
  while (q.length) {
    let [currentPerson, timeOfInitialMeeting] = q.shift();
    results.push(currentPerson);
    let peopleSpokenTo = edges[currentPerson];
    for (let i = 0; i < peopleSpokenTo.length; i++) {
      let [personSpokenTo, timeOfMeeting] = peopleSpokenTo[i];
      if (!seen[personSpokenTo] && timeOfMeeting > timeOfInitialMeeting) {
        seen[personSpokenTo] = true;
        q.push([personSpokenTo, timeOfMeeting]);
      }
    }
  }
  return results;
}

let example = [
  [1, 2, 100],
  [3, 4, 200],
  [1, 3, 300],
  [2, 5, 400],
];
let example2 = [
  [1, 2, 100],
  [2, 3, 100],
  [4, 5, 100],
];
let results = whoKnows(example2, 2);

console.log({ results });
