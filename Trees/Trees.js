const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

const printNode = (value) => console.log(value);

function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class Node {
    constructor (key) {
        this.key = key;     // Value of node
        this.left = null;   // Left child
        this.right = null;  // Right child
    }
}

class BinarySearchTree {
    constructor (compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }

    // Insert a node into the tree
    insert(key) {
        if(this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    // Get minimum value in a tree
    min() {
        return this.minNode(this.root);
    }

    // Get maximum value in a tree
    max() {
        return this.maxNode(this.root);
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    /** ******************Helper Functions******************************/
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    searchNode(node, key) {
        if(node == null) return false;

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    // An in-order traversal visits all the nodes of a BST in an ascending order
    // It takes in a callback function to perform something with each node
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    // inOrderTraverse helper function
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // A pre-order traversal visits the node prior to its descendants.
    // It takes in a callback function to perform something with each node
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    // pre-order traverse helper function
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // A post-order traversal visits the node after it visits its descendants.
    // It takes in a callback function to perform something with each node
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    // post-order traverse callback
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

// console.log(tree.preOrderTraverse(printNode));
console.log(tree.search(3) ? "key found" : "key not found")
console.log(tree.search(22) ? "key found" : "key not found")
console.log(tree.search(39) ? "key found" : "key not found")