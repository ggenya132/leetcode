const e1 = ["colorado", "color", "cold"];
const e2 = ["spot", "spotty", "spotted"];
const e3 = ["a", "b", "c"];
// function longestCommonPrefix(words) {
//   if (!words.length) {
//     return "";
//   }
//   let longestCommonPrefix = words.shift();
//   for (let i = 0; i < words.length; i++) {
//     let currentWord = words[i];
//     let indexOfMatchingWord = 0;
//     while (
//       longestCommonPrefix[indexOfMatchingWord] ==
//         currentWord[indexOfMatchingWord] &&
//       indexOfMatchingWord <
//         Math.min(currentWord.length, longestCommonPrefix.length)
//     ) {
//       indexOfMatchingWord++;
//     }
//     if (longestCommonPrefix == "") {
//       return "";
//     }
//     longestCommonPrefix = currentWord.substring(0, indexOfMatchingWord);
//   }
//   return longestCommonPrefix;
// }

///
// public String longestCommonPrefix(String[] strs) {
//     if (strs == null || strs.length == 0) return "";
//         return longestCommonPrefix(strs, 0 , strs.length - 1);
// }

// private String longestCommonPrefix(String[] strs, int l, int r) {
//     if (l == r) {
//         return strs[l];
//     }
//     else {
//         int mid = (l + r)/2;
//         String lcpLeft =   longestCommonPrefix(strs, l , mid);
//         String lcpRight =  longestCommonPrefix(strs, mid + 1,r);
//         return commonPrefix(lcpLeft, lcpRight);
//    }
// }

// String commonPrefix(String left,String right) {
//     int min = Math.min(left.length(), right.length());
//     for (int i = 0; i < min; i++) {
//         if ( left.charAt(i) != right.charAt(i) )
//             return left.substring(0, i);
//     }
//     return left.substring(0, min);
// }

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  return longestPrefix(strs);
  function longestPrefix(strings) {
    let left = 0;
    let right = strings.length - 1;
    if (left == right) {
      return strings[0];
    }
    let mid = Math.floor((left + right) / 2);
    let longestPrefixOne = longestPrefix(strings.slice(left, mid + 1));
    let longestPrefixTwo = longestPrefix(strings.slice(mid + 1));
    const result = getLongestCommonPrefix(longestPrefixOne, longestPrefixTwo);
    return result;
  }
  function getLongestCommonPrefix(stringOne, stringTwo) {
    let min = Math.min(stringOne.length, stringTwo.length);
    for (let i = 0; i < min; i++) {
      if (stringOne[i] != stringTwo[i]) {
        return stringOne.substring(0, i);
      }
    }
    return stringOne.substring(0, min);
  }
};

const test = longestCommonPrefix(e1);
const test2 = longestCommonPrefix(e2);
const test3 = longestCommonPrefix(e3);

console.log({ test, test2, test3 });
