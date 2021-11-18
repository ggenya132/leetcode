/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let startingTimes = intervals
    .concat()
    .sort(([startA, endA], [startB, endB]) => startA - startB);
  intervals.sort(([startA, endA], [startB, endB]) => endA - endB);
  let amountOfRoomsNeeded = 0;
  let end = 0;
  console.log({ startingTimes });
  console.log({ intervals });

  for (let i = 0; i < intervals.length; i++) {
    //current earliest starting is before current earliest ending
    if (startingTimes[i][0] < intervals[end][1]) {
      console.log("room needed");
      console.log(startingTimes[i][0]);
      console.log(intervals[end][1]);
      amountOfRoomsNeeded++;
    } else {
      //consider next earliest ending relative to next earliest starting meeting
      end++;
    }
  }
  return amountOfRoomsNeeded;
};
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let startingTimes = intervals
    .concat()
    .sort(([startA, endA], [startB, endB]) => startA - startB);
  intervals.sort(([startA, endA], [startB, endB]) => endA - endB);
  let amountOfRoomsNeeded = 0;
  let end = 0;
  console.log({ startingTimes });
  console.log({ intervals });

  for (let i = 0; i < intervals.length; i++) {
    //current earliest starting is before current earliest ending
    if (startingTimes[i][0] < intervals[end][1]) {
      console.log("room needed");
      console.log(startingTimes[i][0]);
      console.log(intervals[end][1]);
      amountOfRoomsNeeded++;
    } else {
      //consider next earliest ending relative to next earliest starting meeting
      end++;
    }
  }
  return amountOfRoomsNeeded;
};
