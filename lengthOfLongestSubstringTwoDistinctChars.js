var lengthOfLongestSubstringTwoDistinct = function (s) {
  let hash = {};
  let longest = 0;
  let left = (right = 0);
  let charsEncountered = 0;
  while (right < s.length) {
    let currentChar = s[right];
    if (!hash.hasOwnProperty(currentChar) || hash[currentChar] == 0) {
      charsEncountered++;
      hash[currentChar] = 1;
    } else {
      hash[currentChar]++;
    }
    while (charsEncountered > 2) {
      let leftCurrentChar = s[left];
      //remove characters occurring till we reach zero for that particular character, which means we can decrement our charsEncountered
      hash[leftCurrentChar]--;
      if (hash[leftCurrentChar] === 0) {
        charsEncountered--;
      }
      //move up left, sliding window left boundary, till we've reached a substring where distinct chars are 2 or less
      left++;
    }

    longest = Math.max(longest, right - left + 1);
    right++;
  }
  return longest;
};
