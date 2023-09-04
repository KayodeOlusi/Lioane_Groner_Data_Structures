class Deque {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
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

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.peekFront();

    delete this.items[this.lowestCount];
    this.lowestCount++;

    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.peekBack();

    delete this.items[this.count - 1];
    this.count--;

    return result;
  }

  peekFront() {
    return this.items[this.lowestCount];
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
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
  }
}

module.exports = {
  Deque,
};
