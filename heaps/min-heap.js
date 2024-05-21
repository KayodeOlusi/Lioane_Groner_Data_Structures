const { defaultCompare, Compare, swap } = require("../utils");

class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  siftUp(index) {
    let parent = this.getParentIndex(index);

    console.log(index, parent);
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);

      console.log(this.heap);
      console.log(index, parent, this.heap[index], this.heap[parent]);
    }
    console.log("-------------------");
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
}

const heap = new MinHeap();
heap.insert(2);
heap.insert(-1);
heap.insert(-5);
heap.insert(6);
heap.insert(1);
heap.insert(5);
heap.insert(4);
heap.insert(-50);

console.log(heap.findMinimum());

