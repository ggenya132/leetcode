/**
 * @param {string} s
 * @return {string}
 */
//O(n^2), O(n )
var longestPalindrome = function(s) {
    
    let start = end = 0;
    
    for(let i = 0 ; i < s.length; i++){
        //string has even chars
        let lengthOne = expandFromMiddle(s, i, i);
        //string has odd chars 
        let lengthTwo = expandFromMiddle(s, i, 1+ i);
        let maxCurrentLength = Math.max(lengthOne, lengthTwo);
        if(maxCurrentLength > end - start){
            //offset zero inclusive to not get -1 potentially
            start = i - (Math.floor((maxCurrentLength - 1) / 2));
            end = i + Math.floor(maxCurrentLength / 2);
        }
    }
    
    let maxPalindromicSubString = s.substring(start, end + 1);
    return maxPalindromicSubString;
    
    function expandFromMiddle(string, left, right){
        while(left >= 0 && right < string.length && string[left] === string[right]){
            left--;
            right++;
        }
        //offset adding negative, as a string that runs the full length will result in left being -1 (substracting a negative is a postive effect)
        return right - left - 1; 
    }
};