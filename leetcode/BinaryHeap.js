class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    let elementToReturn = this.values.pop();
    this.bubbleDown();
    return elementToReturn;
  }
  bubbleUp() {
    let indexOfLastInsertedElement = this.values.length - 1;
    let lastInsertedElement = this.values[indexOfLastInsertedElement];
    let getIndexOfParent = (indexOfChild) => {
      return Math.floor((indexOfChild - 1) / 2);
    };
    let swap = (i, j) => {
      [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    };
    let indexOfParent = getIndexOfParent(indexOfLastInsertedElement);
    let parent = this.values[indexOfParent];
    while (indexOfLastInsertedElement > 0) {
      console.log({ parent });
      if (lastInsertedElement > parent) {
        swap(indexOfLastInsertedElement, indexOfParent);
        indexOfLastInsertedElement = indexOfParent;
        indexOfParent = getIndexOfParent(indexOfLastInsertedElement);
        parent = this.values[indexOfParent];
      } else {
        break;
      }
    }
  }
  bubbleDown() {
    let swap = (i, j) => {
      [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    };
    let currentIndex = 0;
    let currentElement = this.values[currentIndex];
    let indexOfChild = currentIndex * 2 + 1;
    let indexOfChildTwo = indexOfChild + 1;
    const assignIndexes = (index) => {
      currentIndex = index;
      currentElement = this.values[currentIndex];
      indexOfChild = currentIndex * 2 + 1;
      indexOfChildTwo = indexOfChild + 1;
    };
    while (
      indexOfChild < this.values.length ||
      indexOfChildTwo < this.values.length
    ) {
      let childOne = this.values[indexOfChild];
      let childTwo = this.values[indexOfChildTwo];
      if (currentElement < childOne || currentElement < childTwo) {
        let indexToSwap;
        if (childOne) {
          indexToSwap = indexOfChild;
          //   swap(indexOfChild, currentIndex);
          //   assignIndexes(indexOfChild);
        }
        if (childTwo) {
          if (childTwo > childOne) {
            indexToSwap = indexOfChildTwo;
          }
        }
        swap(indexToSwap, currentIndex);
        assignIndexes(indexToSwap);
      } else {
        return;
      }
    }
  }
}
