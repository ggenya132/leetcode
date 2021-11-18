//naive
function maxSubArraySum(arr, n) {
  let max = -Infinity;
  // <= because n it's is not included
  for (let i = 0; i <= arr.length - n; i++) {
    let temp = 0;
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(i + j);
      temp += arr[i + j];
      console.log({ temp });
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//REFAC with sliding window

function maxSubArraySumWithSlidingWindow(arr, n) {
  let temp = 0;
  let max;
  //create intial 'window'
  //take intial range of sums
  for (let i = 0; i < n; i++) {
    temp += arr[i];
  }
  max = temp;
  //because we're examing a 'continuous' series of n integers,
  //we can simply remove the last int while adding in the new one
  //this maintains the range over n consecutive sums as we slide the window
  //we can say the var MAX is always the window and the loop slides

  //intialize to n beacuse we've already taken sum of consecutive numbers
  for (let i = n; i < arr.length; i++) {
    //get number before current 'window'
    // NOTE:  max includes this number currently
    //look back n spaces eg, we start at 2, look back 2 space 2-2 we get first element, 0
    let lastAddedNumber = arr[i - n];
    //get new number to add
    let currentNumberToAdd = arr[i];
    console.log({ temp });
    //discount previous number, add new one, compare
    temp = temp - lastAddedNumber + currentNumberToAdd;
    // new max is whichever sum is bigger

    console.log({ max, temp, currentNumberToAdd, lastAddedNumber });

    max = Math.max(temp, max);
  }
  return max;
}

function maxSubarraySum(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  if (n > arr.length) {
    return null;
  }
  let max = 0;
  //create 'window'
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  let temp = max;

  //slide window
  for (let i = n; i < arr.length; i++) {
    //remove element behind current window
    let previouslyAddedNumber = arr[i - n];
    //add current window
    let currentNumberToAdd = arr[i];
    temp = temp - previouslyAddedNumber + currentNumberToAdd;
    max = Math.max(temp, max);
  }
  return max;
}

function maxSubarraySum(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  if (n > arr.length) {
    return null;
  }
  let max = 0;
  //create 'window'
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  let temp = max;

  //slide window
  for (let i = n; i < arr.length; i++) {
    //remove element behind current window
    let previouslyAddedNumber = arr[i - n];
    //add current window
    let currentNumberToAdd = arr[i];
    temp = temp - previouslyAddedNumber + currentNumberToAdd;
    max = Math.max(temp, max);
  }
  return max;
}

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let map = {};
  let count = 0;
  //basically the window
  let currentSubStr = "";
  let indexOfStartingRepition;
  for (let i = 0; i < str.length; i++) {
    if (!map.hasOwnProperty(str[i]) || map[str[i]] < indexOfStartingRepition) {
      currentSubStr += str[i];
      map[str[i]] = i;
    } else {
      indexOfStartingRepition = map[str[i]];
      //constrict the window, exclude the previous non distinct, already included in count
      currentSubStr = str.substring(indexOfStartingRepition + 1, i + 1);
      //reset the map
      map[str[i]] = i;
    }
    count = Math.max(count, currentSubStr.length);
  }
  return count;
}
// I'm proud of this
findLongestSubstring("thisisawesome");
