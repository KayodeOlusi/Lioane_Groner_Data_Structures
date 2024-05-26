const MinHeap = require("./min-heap");
const { defaultCompare, reverseCompare } = require("../utils");

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}

module.exports = MaxHeap;