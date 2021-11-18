// let meetings = [
//   [1, 5],
//   [3, 2],
//   [5, 7],
//   [7, 8],
//   [1, 3],
// ];

// function getInfected(infected, meetings) {
//   let adjacenyList = {};
//   for (let i = 0; i < meetings.length; i++) {
//     let [personOne, personTwo] = meetings[i];

//     if (adjacenyList[personOne]) {
//       adjacenyList[personOne].push(personTwo);
//     } else {
//       adjacenyList[personOne] = [];
//       adjacenyList[personOne].push(personTwo);
//     }
//     if (adjacenyList[personTwo]) {
//       adjacenyList[personTwo].push(personOne);
//     } else {
//       adjacenyList[personTwo] = [];
//       adjacenyList[personTwo].push(personOne);
//     }
//   }

//   console.log({ adjacenyList });
//   let visited = {};

//   let reuslts = [];
//   helper(infected);
//   return reuslts;
//   function helper(vertex) {
//     if (!visited[vertex]) {
//       visited[vertex] = true;
//       reuslts.push(vertex);
//       let adjacentNode = adjacenyList[vertex];
//       console.log({ adjacentNode });
//       if (adjacentNode.length) {
//         adjacentNode.forEach((node) => {
//           helper(node);
//         });
//       }
//     }
//   }
// }

// getInfected(1, meetings);

let meetings = [
  [1, 5],
  [3, 2],
  [5, 7],
  [7, 8],
  [1, 3],
];

2;
let newMeetings = [
  [5, 2],
  [1, 4],
  [4, 5],
  [6, 5],
  [1, 3],
];

function getInfected(infected, meetings) {
  let visited = {};

  let reuslts = [];
  let currentIndexOfMeeting = 0;
  let q = [];
  let currentInfected = infected;
  meetings.forEach(([personA, personB], index) => {
    if (personA === currentInfected || personB === currentInfected) {
      if (personA === currentInfected) {
        q.push([personB, index]);
      } else {
        q.push([personA, index]);
      }
    }
  });
  reuslts.push(currentInfected);
  visited[currentInfected] = true;
  while (q.length) {
    let [nextInfectedPerson, indexOfMeeting] = q.shift();
    visited[nextInfectedPerson] = true;
    reuslts.push(nextInfectedPerson);
    console.log({ nextInfectedPerson, indexOfMeeting });
    meetings.forEach(
      ([potentialInfectedPersonA, potentialInfectedPersonB], index) => {
        if (
          potentialInfectedPersonA === nextInfectedPerson ||
          potentialInfectedPersonB === nextInfectedPerson
        ) {
          let newlyInfected =
            potentialInfectedPersonA === nextInfectedPerson
              ? potentialInfectedPersonB
              : potentialInfectedPersonA;
          if (!visited[newlyInfected] && index > indexOfMeeting) {
            q.push([newlyInfected, index]);
          }
        }
      }
    );
  }
  return reuslts;
}

let testMeetings = [
  [1, 5],
  [4, 2],
  [2, 5],
  [5, 1],
];

getInfected(2, testMeetings);
