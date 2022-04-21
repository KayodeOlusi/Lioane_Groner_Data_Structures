import { LinkedList, Node } from "./linkedlist";

export class DoublyLinkedList extends LinkedList {
	constructor(equalFn) {
		super(equalFn);
		this.tail = undefined;
	}

	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new DoublyNode(element);
			// reference the first element as current
			const current = this.head;
			if (index === 0) {
				if (this.head === null) {
					// if no first element, set the node as the first element
					this.head = node;
					this.tail = node;
				}
				// for nodes added as the last item
			} else if (index === this.count) {
				// update current as the last node
				// and change the links
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			} else {
				// get the previous, current node and connect them to the new node
				const previous = this.getElementAt(index - 1);
				previous.next = node;
				current = prev.next;
				node.prev = previous;
				node.next = current;
				current.prev = node;
			}
			// increment count
			this.count++;
			return true;
		}
		return false;
	}

	removeAt(index) {
		if (index >= 0 && index <= this.count) {
			// get the first node
			let current = this.head;
			if (index === 0) {
				// change the head to the next node
				this.head = current.next;
				if (index === 1) {
					// update the last element
					this.tail = undefined;
				} else {
					this.head.prev = undefined;
				}
			} else if (index === this.count - 1) {
				// set current to the last element
				// change their links
				current = this.tail;
				this.tail = current.prev;
				this.tail.next = undefined;
			} else {
				// get the node and change the links
				current = this.getElementAt(index);
				const previous = current.prev;
				previous.next = current.next;
				current.next.prev = prev;
			}
			// decrement count and return the node
			this.count--;
			return current.element;
		}

		return undefined;
	}
}

class DoublyNode extends Node {
	constructor(element, next, prev) {
		super(element, next);
		this.prev = prev;
	}
}
