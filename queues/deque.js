/**
 * A deque data structure(double-ended queue) is a queue that allows us to insert and remove elements
 *  from the end or front of the queue
 */

module.exports = class Deque {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
    // return this.size() === 0
    /**
     * This method returns the state of the queue if empty or not
     * Since we are using objects for our queue, we deduct the first and the second values
     */
  }

  size() {
    return this.count - this.lowestCount;
    // Same output with isEmpty() method
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
    }
    this.count++;
    this.lowestCount = 0;
    this.items[0] = element;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
    // This method adds a new method to the back of the queue
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
    // This method removes the first item from the queue
  }

  removeBack() {
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
    // return this.items.pop();
    // This method removes the last item from the queue
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
    // This method returns the first element in the queue
  }

  peekBack() {
    return this.items[this.items.length - 1];
    // This method returns the last element in the queue
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
    // This method loops through our items object and concatenates it with thw string
  }
};

/**
 * Palindrome Checker with Deque data structure
 */

function palindromeChecker(aString) {
  const deque = new Deque();

  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  const lowerString = aString.toLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("level", palindromeChecker("level"));
console.log("kayak", palindromeChecker("kayak"));
console.log("Step on no pets", palindromeChecker("Step on no pets"));
