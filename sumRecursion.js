function addSum(num, sum = 0){
    if(num === 0){
        return sum
    } else {
        return addSum(num-1, sum+num)
    }   
}
console.log(addSum(5))