class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    console.log({ values: [...this.values] });
  }
  bubbleUp() {
    let indexOfElement = this.values.length - 1;

    while (indexOfElement > 0) {
      let indexOfparentElement = Math.floor((indexOfElement - 1) / 2);

      let originalElement = this.values[indexOfElement];
      let parentElement = this.values[indexOfparentElement];
      if (parentElement < originalElement) {
        this.swap(indexOfElement, indexOfparentElement);
        indexOfElement = indexOfparentElement;
      } else {
        break;
      }
    }
  }
  swap(i1, i2) {
    let temp = this.values[i1];
    this.values[i1] = this.values[i2];
    this.values[i2] = temp;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
