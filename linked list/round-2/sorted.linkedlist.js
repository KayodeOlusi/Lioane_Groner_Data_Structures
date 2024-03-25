const { LinkedList } = require("./linked.list");
const { defaultEquals } = require("../../utils");

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if (this.isEmpty) {
      return super.insert(element, index);
    }

    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;

    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) return i;

      current = current.next;
    }

    return i;
  }
}

const linkedList = new SortedLinkedList();
linkedList.push(1);
linkedList.push(3);
linkedList.push(2);
linkedList.push(5);
linkedList.push(4);
linkedList.insert(0, 3);
console.log(linkedList.toString());
console.log(linkedList.remove(1));
console.log(linkedList.toString());
