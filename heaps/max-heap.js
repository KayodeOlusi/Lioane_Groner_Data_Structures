const MinHeap = require("./min-heap");
const { defaultCompare, reverseCompare } = require("../utils");

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
console.log("Heap size: ", maxHeap.size());
console.log("Heap min value: ", maxHeap.findMinimum());
console.log("Heap: ", maxHeap.getAsArray());

module.exports = MaxHeap;
