/**
 * A queue is an ordered collection	of items that follows the first in,	first out (FIFO), also known as	the	first come,
 * 	first served, principle
 */

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };

    isEmpty() {
        return this.count - this.lowestCount === 0;
        // return this.size() === 0
        /** 
         * This method returns the state of the queue if empty or not
         * Since we are using objects for our queue, we deduct the first and the second values
        */
    };

    size() {
        return this.count - this.lowestCount;
        // Same output with isEmpty() method
    };

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
        // This method adds a new method to the back of the queue
    };

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        };
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
        // This method removes items from the queue
    };

    peek() {
        if (this.isEmpty()) {
            return undefined;
        };
        return this.items[this.lowestCount];
        // This method returns the first element in the queue
    };

    toString() {
        if(this.isEmpty()) {
            return '';
        };
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        };
        return objString;
        // This method loops through our items object and concatenates it with thw string
    };

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
        // This method resets the values
    }
};

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.enqueue('Canila'));
console.log(queue.enqueue('John'));
console.log(queue.toString());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.enqueue('Jack'));
console.log(queue.size());
console.log(queue.isEmpty());

