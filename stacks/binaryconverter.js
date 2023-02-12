/**
 * Converting decimal numbers to binary
 */

class Stack {
  constructor() {
    this.items = [];
  }
  pop() {
    return this.items.pop();
  }
  push(element) {
    this.items.push(element);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

// Decimal to binary
function decimalToBinary(decNumber) {
  let remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += String(remStack.pop());
  }
  return binaryString;
}

//Base converter algorithm
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = decNumber;
  let rem;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (num > 0) {
    rem = Math.floor(num % base);
    remStack.push(rem);
    num = Math.floor(num / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

// console.log(decimalToBinary(233));
// console.log(decimalToBinary(10));
// console.log(decimalToBinary(1000));

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));
