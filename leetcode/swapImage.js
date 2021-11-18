/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    

    
    let lengthOfRowsAndColumns = matrix.length;
    function swapCorners(i,j){
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
    function swapColumn(i, j){
       [matrix[i][j], matrix[i][lengthOfRowsAndColumns - 1 -j]] = 
       [matrix[i][lengthOfRowsAndColumns - 1 -j], matrix[i][j]]
    }
    
    for(let i = 0; i <lengthOfRowsAndColumns ; i++){
        for(let j = i; j < lengthOfRowsAndColumns; j++){
            swapCorners(i,j);
        }
    }
    for(let i = 0; i < lengthOfRowsAndColumns; i++){
        for(let j = 0; j < Math.floor(lengthOfRowsAndColumns / 2); j++){
            swapColumn(i, j);
        }
    }
};