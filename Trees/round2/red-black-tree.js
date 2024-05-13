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
        } else {
          // Case 2A: Node is right child of parent - left rotate
          if (node.parent === node) {
            this.rotateRR(parent);
            node = parent;
            parent = node.parent;
          }
          // Case 3A: Node is left child of parent - right rotate
          this.rotateLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        // Case B: Parent is a right child
        const uncle = grandParent.left;

        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // Case 2B: Node is left child of parent - right rotate
          if (node === parent.left) {
            this.rotateLL(parent);
            node = parent;
            parent = node.parent;
          }
          // Case 3B: Node is right child of parent - left rotate
          this.rotateRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }

    this.root.color = Colors.BLACK;
  }

  rotateLL(node) {
    const temp = node.left;
    node.left = temp.right;

    if (temp.right && temp.right.key) {
      temp.right.parent = node;
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp;
      } else {
        node.parent.right = temp;
      }
    }
    temp.right = node;
    node.parent = temp;
  }

  rotateRR(node) {
    const temp = node.right;
    node.right = temp.left;
    
    if (temp.left && temp.left.key) {
      temp.left.parent = node;
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp;
      } else {
        node.parent.right = temp;
      }
    }
    temp.left = node;
    node.parent = temp;
  }
}

