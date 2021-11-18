const input = [5, 2, 4, 6, 1, 3];
const input2 = [24, 18, 38, 43, 14, 40, 1, 54];

//THIS ALGO DEPENDS ON THE IMAGRY OF TAKING A CARD FROM A DECK
//AND COMPARING TO THE CARDS IN YOUR HAND THEN SORTING THOSE CARDS
//IT IS IMPORTANT TO UNDERSTAND that [i1,i2 ... j -1] will be sorted
//WHILE [j+1..n] will be unsorted
function mergeSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    // let j be one cause
    // we need at least two cards to compare and sort
    // take card from deck
    let currentCardBeingInserted = arr[j];
    // Check cards currently in hand
    let i = j - 1;
    //start iterating backwards from however many we 'have in hand', ie, items weve been through in array
    while (arr[i] > currentCardBeingInserted && i >= 0) {
      // aka j on first iteration
      // the card 'behind' is greater than the one in front, so we swap
      // this leaves a double value, however this balanced out by the last line of the algo
      arr[i + 1] = arr[i];
      // this is really important so we can correctly place the card in hand on line 27
      i--;
    }
    //we've reached the end of our sorting and moved all other cards up one space,
    // lets put our current card in hand where it belongs
    // IF it was always bigger than the other elements, it stays where it is
    // SINCE J was one ahead of I, nothing will change
    arr[i + 1] = currentCardBeingInserted;
  }
}

mergeSort(input2);
console.log({ input2 });
