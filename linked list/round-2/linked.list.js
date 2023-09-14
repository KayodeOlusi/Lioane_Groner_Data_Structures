const { defaultEquals } = require("../../utils");
const { Node } = require("./models/linked-list-models");

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.head = null;
    this.count = 0;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;

        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      let node;

      if (index === 0) {
        return current;
      } else {
        for (let i = 0; i < index && node !== null; i++) {
          node = current.next;
        }

        return node;
      }
    }

    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;

        previous.next = node;
        node.next = current;
      }

      this.count++;
      return true;
    }

    return false;
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head === null) {
      return "";
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 1; i < this.count && current !== null; i++) {
      objString = `${objString}, ${current.element}`;

      current = current.next;
    }

    return objString;
  }
}

module.exports = {
  LinkedList,
};

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.insert(0, 3);
console.log(linkedList.toString());
console.log(linkedList.remove(1));
console.log(linkedList.toString());
