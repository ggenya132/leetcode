/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(!s.length){
        return false;
    }
    if(isPalindrome(s)){
        return true;
    }

    let left = 0;
    let right = s.length - 1;
    
    while(left <= right){
        if(s[left] !== s[right]){
            return 
                //check if removing left will do it 
                isPalindrome(s.substring(left + 1, right + 1)) ||
                    //check if removing right will do it 
                   isPalindrome(s.substring(left, right))
        }
        else {
            left++;
            right--;
        }
    }
    
        return false;

    function isPalindrome(string){
        let left = 0;
        let right = string.length - 1;
        while(left <= right){
            if(string[left] !== string[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
};