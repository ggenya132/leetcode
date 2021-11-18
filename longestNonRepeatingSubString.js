/**
 * @param {string} s
 * @return {number}
 */
// brute force
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }

  //  s = s.replace(/[\W_]+/g,"");
  let currentLongest = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let currentSubstring = s.substring(i, j + 1);
      if (stringDoesNotHaveRepeatingCharacters(currentSubstring)) {
        currentLongest = Math.max(currentSubstring.length, currentLongest);
      }
    }
  }

  function stringDoesNotHaveRepeatingCharacters(string) {
    let hash = {};
    for (let i = 0; i < string.length; i++) {
      let currentChar = string[i];
      if (hash.hasOwnProperty(currentChar)) {
        return false;
      } else {
        hash[currentChar] = true;
      }
    }
    return true;
  }
  return currentLongest;
};

function sw(string) {
  let longest = 0;
  let hash = {};
  for (let left = 0, right = 0; right < string.length; right++) {
    let currentChar = string[right];
    hash[currentChar] = hash.hasOwnProperty(currentChar)
      ? hash[currentChar] + 1
      : 1;
    while (hash[currentChar] > 1) {
      //reset chars along the way till we reach repeating charactger
      let currentLeftChar = string[left];
      hash[currentLeftChar] = hash[currentLeftChar] - 1;
      left++;
    }
    longest = Math.max(longest, right - left + 1);
    right++;
  }
  console.log(longest);
}

function slidingWindowOptimizedWithIndexHash(string) {
  let currentLongest = 0;
  let hash = {};
  for (let i = 0, j = 0; i < string.left; i++) {
    let currentChar = string[i];
    if (hash.hasOwnProperty(currentChar)) {
      let indexOfRepeatingCharacter = hash[currentChar];
      if (indexOfRepeatingCharacter > j) {
        //if the repeating character happened before
        //our sliding left side of window, we can ignore
        // otherwirse, we move our left window boundary
        // to one ahead of the repeating character
        j = indexOfRepeatingCharacter + 1;
      }
    } else {
      //update where current char encountered is, this ensures previous 'repeated' chars are encountered again
      hash[currentChar] = i;
      currentLongest = Math.max(currentLongest, i - j + 1);
    }
  }
  return currentLongest;
}
