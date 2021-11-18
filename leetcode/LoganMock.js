// There is a street, and along it there are tiles of land with some prices. For example:

// 3 2 3 1 4 1 1 3 (million dollars)

// You have some budget, say, 7 (million dollars).
// You want to buy the longest possible segment of land within that budget.

// Write a function to do this

// //o(n) o(1)
// Function getLongestPlotOfLand(plotsOfLand, budget){

// Let longestLongestThusFar = -Infinity;

// Let left = right =0;
// Let longestIndexes;
// Let currentSumValue = 0;
// while(right < plotsOfLand.length){
//  if(currentSumValue <= budget){
//     //8
//     currentSumValue += plotsOfLand[right];
//     right++
//   }
// Else {
// Let candidateLongestPlot = right - left;
// //2 - 0;
// //2
//  if(candidateLongestPlot > longestLongestThusFar){
//        longestLongestThusFar = candidateLongestPlot;
//           longestIndexes = [left,right-1];
// }
//   Left = right;
// currentSumValue = 0
// }

//   Return longestIndexes;
// }

function getLongestPlotOfLand(plotsOfLand, budget) {
  let longest = 0;
  let currentTotal = 0;
  let left = (right = plotsOfLand.length);
  while (right < plotsOfLand.length) {
    currentTotal += plotsOfLand[right];
    if (currentTotal > budget) {
      longest = Math.max(right - left, longest);
      while (currentTotal > budget) {
        currentTotal -= plotsOfLand[left];
        left++;
      }
    }
  }
  longest = Math.max(right - left, longest);
}

// Function getLongestPlotOfLand(plotsOfLand, budget){

// Let longestIndexes;
// Let longestThusFar = -Infinity;

// [8, 8, 8, 1]
// 3 2 3 1 4 1 1 3

// longest indices = 2

// for(let i = 0; i < plotsOfLand.length; i++){ //3
// Let currentSumValue = 0;
//  for(let j = i; j < plotsOfLand.length; j++){ //3
//   Let newValue = currentSumValue + plotsOfLand[j]; //1

//  if(newValue <= budget){
//  currentSumValue = newValue //1
// }

// Else {
//   Let longestCandidate = j - i;
//   if(longestCandidate> longestThusFar){
// longestThusFar = j - i;
// }
// break;
// }

// if(j == plotsOfLand.length - 1){
//    Let longestCandidate = j - i;
//   if(longestCandidate> longestThusFar){
// longestThusFar = j - i;
// }
// }
// }
// }
// }
// }

// https://leetcode.com/discuss/interview-question/348632/Google-or-Phone-Screen-or-Max-Size-Subarray-Sum-Equals-k
// Q2 (shown when Q1 done). Now, we have a 2D rectangular map of tiles with prices.
// This time, we want largest square within budget.
