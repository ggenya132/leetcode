/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) {
    if(!arr.length){
        return 0;
    }
    let maxSoFar = currentSubArrayMax = arr[0];
    for(let i = 1; i < arr.length; i++){
        //if adding the previous subarray sum will result in a less results
        //we abandon the previous subarry by taking just i rather than i +              //previousSubSums, as previous subArray could only possibly lower max          //reuslts
        currentSubArrayMax = Math.max(arr[i], arr[i] + currentSubArrayMax);
        maxSoFar = Math.max(maxSoFar, currentSubArrayMax);
    }
    return maxSoFar;
};