import { LinkedList, Node } from "./linkedlist";

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalFn) {
        super(equalFn);
        this.tail = undefined;
    }
}
