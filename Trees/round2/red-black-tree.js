const { defaultCompare } = require("../../utils");
const BinarySearchTree = require('./trees');

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare()) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
}

