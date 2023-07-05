class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const result = this.items[this.count];

    delete this.items[this.count];

    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) return undefined;

    let objString = `${this.isEmpty[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

function decimalToBinary(decNumber) {
  let stack = new Stack();
  let remainder;
  let number = decNumber;
  let result = "";

  while (number > 0) {
    remainder = Math.floor(number % 2);
    stack.push(remainder);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    result += stack.pop().toString();
  }

  return result;
}

console.log(decimalToBinary(233));
