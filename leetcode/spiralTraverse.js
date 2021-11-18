function spiralTraverse(array) {
  // Write your code here.
	let startingColumn = startingRow = 0;
	let endingColumn = array[0].length - 1;
	let endingRow = array.length - 1;
	let results = [];
	while(startingColumn <= endingColumn && startingRow <= endingRow){
		for(let i = startingColumn; i <= endingColumn; i++){
			results.push(array[startingRow][i]);
		}
		
		for(let i = startingRow + 1; i <= endingRow; i++){
				results.push(array[i][endingColumn]);
		}
		for(let i = endingColumn - 1; i >= startingColumn; i--){
			
			//i dont get this, look at example for this brain fuck
					if(endingRow === startingRow){
						break;
					}
			
			results.push(array[endingRow][i]);
		}
		for(let i = endingRow - 1; i > startingRow; i--){
			//i dont get this, look at exmaples for this brain fuck
				if(endingColumn === startingColumn){
					break;
				}
					results.push(array[i][startingColumn]);

		}
			startingColumn++;
	endingRow--;
	endingColumn--;
			startingRow++;

	}
	return results;

}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
