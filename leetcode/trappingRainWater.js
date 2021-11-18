/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {

//     let totalVolume = 0;
//     for(let i = 0; i < height.length; i ++){
//         let boundary = getRange(i);
//         if(boundary > height[i]){
//             totalVolume += boundary - height[i];
//         }
//     }

//     function getRange(index){
//         if(index === 0 || index === height.length - 1){
//             return 0
//         }
//         left = index - 1;
//         right = index + 1;
//         let leftMax = rightMax = 0;
//         while(left >= 0){
//             leftMax = Math.max(leftMax, height[left]);
//             left--;
//         }
//         while(right < height.length){
//             rightMax = Math.max(rightMax, height[right]);
//             right++;
//         }
//         return Math.min(rightMax,leftMax);
//     }
//     return totalVolume;
// };

var trap = function (height) {
  let heighestAtLeft = [];
  let highestAtRight = [];
  heighestAtLeft[0] = 0;
  highestAtRight[height.length - 1] = 0;
  let currentMax = 0;
  for (let i = 1; i < height.length; i++) {
    currentMax = Math.max(currentMax, height[i - 1]);
    heighestAtLeft[i] = currentMax;
  }
  currentMax = 0;
  for (let i = height.length - 2; i >= 0; i--) {
    currentMax = Math.max(currentMax, height[i + 1]);
    highestAtRight[i] = currentMax;
  }
  return height.reduce((totalVolume, height, index) => {
    totalVolume +=
      height < Math.min(heighestAtLeft[index], highestAtRight[index])
        ? Math.min(heighestAtLeft[index], highestAtRight[index]) - height
        : 0;
    return totalVolume;
  }, 0);

  // console.log({heighestAtLeft, highestAtRight});
  //return totalVolume;
};
