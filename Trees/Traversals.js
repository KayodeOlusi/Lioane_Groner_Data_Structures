const Node = require("./Trees");
const BinaryTree = require("./Trees");

const printNode = (value) => console.log(value); 

class Traversals extends BinaryTree {
    constructor () {
        super();
    }

    // An in-order traversal visits all the nodes of a BST in an ascending order
    inOrderTraverse (callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraversals (node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
}

const tree = new Traversals();
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

tree.inOrderTraverse(printNode);

