/**
 * A stack is an ordered collection	of items that follows the last in, first out (LIFO)	principal
 * 
 */

// A class to represent a stack
class Stack {
    constructor () {
        this.items = [];
        this.count = 0;
    }

    // pushing element to the stack
    push (element) {
        this.items.push(element);
    }
    // push a single element per call
    pushOne (element) {
        this.items[this.count] = element;  // put the element to be inputed in the first index
        this.count++;   // increment the count variable to input another element
    }
    // popping elements from the stack (removing and returning the first element)
    pop () {
        return this.items.pop();
        
        //  if (this.isEmpty()) {
        //       return undefinded
        //  }
        //   this.count--;
        //   const result = this.items[this.count];
        //   delete this.items[this.count];
        //   delete result;

        // while(!this.isEmpty()) {
        //     this.items.pop();
        // }
         
    }
    // a custom method (for returning last element added to stack)
    peek () {
        return this.items[this.items.length - 1];
    }
    // check if a stack is empty
    isEmpty () {
        return this.items.length === 0;
        //return this.count === 0;
    }
    // check the size of the stack
    size () {
        return this.items.length;
        // return this.count; 
    }
    // clear the stack
    clear () {
        this.items = [];
    }
    // turn to a string
    toString() {
        if(this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

let stack = new Stack();
// console.log(stack.push(1, 2, 3, 4, 5));
// console.log(stack.pop());
// console.log(stack.toString());


// console.log(Object.getOwnPropertyNames(stack))
// console.log(Object.keys(stack))
// console.log(stack.items)

// **************************************************
// Underscore naming convention
class Stack {
    constructor() {
        this._count = 0;
        this._items = [];
        // underscores are used to show a private key.This is not a javascript way but a habit of developers
    }
}

// Weakmap() is a datatype to ensure that a property will be private in a class
const items = new WeakMap();    // we declare the items variable as a Weakmap()

class Stack {
    constructor () {
        items.set(this, []);
        // set the items value inside the constructor by setting 'this' as the key and array as the value
    }
    push (element) {
        const s = items.get(this);  // retrieve the value of the items by retrieving the value from the weakmap
        s.push(element);
    }
    pop () {
        const s = items.get(this);
        const r = s.pop();
        return r;
    }
}