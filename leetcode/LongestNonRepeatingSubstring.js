 var lengthOfLongestSubstring = function (string) {
 let currentLongest = 0;
  let hash = {};
  for (let i = 0, j = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (hash.hasOwnProperty(currentChar)) {
      let indexOfRepeatingCharacter = hash[currentChar];
      if (indexOfRepeatingCharacter >= j) {
        //if the repeating character happened before (iORC < j)
        //our sliding left side of window, we can ignore
        // otherwirse, we move our left window boundary
        // to one ahead of the repeating character
        j = indexOfRepeatingCharacter + 1;
      }
    } 
      
      //update where current char encountered is, this ensures previous 'repeated' chars are encountered again
      hash[currentChar] = i;
      currentLongest = Math.max(currentLongest, i - j + 1);
    
  }
  return currentLongest;
}