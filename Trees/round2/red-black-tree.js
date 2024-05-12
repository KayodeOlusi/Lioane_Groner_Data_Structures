const { RedBlackNode } = require("../models");
const { defaultCompare, Colors, Compare } = require("../../utils");
const BinarySearchTree = require('./trees');

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  fixTreeProperties(node) {
    while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;

      // Case A: If parent is left child;
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;

        // Case 1A: Uncle of node is also red - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else { /* empty */ }
      } else {
        // Case B: Parent is a right child
        const uncle = grandParent.left;

        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else { /* empty */ }
      }
    }

    this.root.color = Colors.BLACK;
  }
}

