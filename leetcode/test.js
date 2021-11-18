/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = [];
    nums.sort((a,b)=>a-b);
    
    for(let i = 0; i < nums.length - 2;i++){
        if(!i === 0 && nums[i] === nums[i - 1]){
            continue
        }
        else {
            let base = nums[i];
            let left = i + 1; 
            let right = nums.length - 1;
            while(left < right){
                let sum = base + nums[left] + nums[right];
                if(sum === 0){
                    arr.push([base, nums[left], nums[right]]);
                    while(nums[left] === nums[left + 1] && left < right){
                        left++;
                    }
                    while(nums[right] === nums[right - 1] && left < right){
                        right--
                    }
                    left++;
                    right--;
                }
                else {
                    if(sum > 0){
                        right--
                    }
                    if(sum < 0){
                        left++;
                    }
                }
            }
        }
    }
    console.log({arr})
};