class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  buildHeap(array) {
    let firstChildIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstChildIndex; i >= 0; i--) {
      this.shiftDown(i, array.length - 1, array);
    }
    return array;
  }

  shiftDown(startIndex, endIndex, heap) {
    //get initial parent index

    let childOneIndex = startIndex * 2 + 1;
    while (childOneIndex <= endIndex) {
      const childTwoIndex =
        startIndex * 2 + 2 <= endIndex ? startIndex * 2 + 2 : undefined;

      let indexToSwap;
      if (childTwoIndex && heap[childTwoIndex] < heap[childOneIndex]) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }
      if (heap[indexToSwap] < heap[startIndex]) {
        this.swap(indexToSwap, startIndex, heap);
        startIndex = indexToSwap;
        childOneIndex = startIndex * 2 + 1;
      } else {
        return;
      }
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let itemToReturn = this.heap.pop();
    this.shiftDown(0, this.heap.length - 1, this.heap);
    return itemToReturn;
  }
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  siftUp(startIndex, heap) {
    //get initial parent index
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    //as long as as child is smaller than parent, move child UP and reassing indexes
    while (heap[childIndex] < heap[parentIndex] && parentIndex > 0) {
      this.swap(childIndex, parentIndex, heap);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }
  swap(indexA, indexB, array) {
    [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
  }
}

class PriorityQueue {
  constructor(array, comparator = (a, b) => a - b) {
    this.comparator = comparator;
    this.heap = this.buildHeap(array);
  }
  buildHeap(array) {
    let firstChildIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstChildIndex; i >= 0; i--) {
      this.shiftDown(i, array.length - 1, array);
    }
    return array;
  }

  shiftDown(startIndex, endIndex, heap) {
    //get initial parent index
    let compare = this.comparator;
    let childOneIndex = startIndex * 2 + 1;
    while (childOneIndex <= endIndex) {
      const childTwoIndex =
        startIndex * 2 + 2 <= endIndex ? startIndex * 2 + 2 : undefined;

      let indexToSwap;
      if (
        childTwoIndex &&
        compare(heap[childTwoIndex], heap[childOneIndex]) < 0
      ) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }
      if (compare(heap[indexToSwap], heap[startIndex]) < 0) {
        this.swap(indexToSwap, startIndex, heap);
        startIndex = indexToSwap;
        childOneIndex = startIndex * 2 + 1;
      } else {
        return;
      }
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let itemToReturn = this.heap.pop();
    this.shiftDown(0, this.heap.length - 1, this.heap);
    return itemToReturn;
  }
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  siftUp(startIndex, heap) {
    //get initial parent index
    let compare = this.comparator;
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    //as long as as child is smaller than parent, move child UP and reassing indexes
    while (
      compare(heap[childIndex], heap[parentIndex]) < 0 &&
      parentIndex > 0
    ) {
      this.swap(childIndex, parentIndex, heap);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }
  swap(indexA, indexB, array) {
    [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
