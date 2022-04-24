/**
 * A queue is an ordered collection	of items that follows the first in,	first out (FIFO), also known as	the	first come,
 * 	first served, principle
 */

class Queue {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
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

	enqueue(element) {
		this.items[this.count] = element;
		this.count++;
		// This method adds a new method to the back of the queue
	}

	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return result;
		// This method removes items from the queue
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.lowestCount];
		// This method returns the first element in the queue
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

	clear() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
		// This method resets the values
	}
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// console.log(queue.enqueue('mark'));
// console.log(queue.enqueue('John'));
// console.log(queue.toString());
// console.log(queue.isEmpty());
// console.log(queue.dequeue());
// console.log(queue.size());
// console.log(queue.enqueue('Jack'));
// console.log(queue.size());
// console.log(queue.isEmpty());

/**
 * Circular Queue
 * In this game, children are organized in a circle, and they pass a hot potato to their neighbor as fast as they can.
 * At a certain point of the game, the hot potato stops being passed around the circle of children, and the child that has the potato
 * is removed from the game or circle.
 *
 * Write a function that shoes how the game is played
 */

const hotPotato = (elementsList, num) => {
	const queue = new Queue();
	const eliminatedList = [];

	for (let i = 0; i < elementsList.length; i++) {
		queue.enqueue(elementsList[i]); // Add the players to the queue
	}

	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
			// Remove the first element from the queue and add them to the back as they have passed the hot potato
		}
		eliminatedList.push(queue.dequeue());
		// Eliminate the person that holds the potato
	}

	return {
		eliminated: eliminatedList,
		winner: queue.dequeue(),
	};
};

const names = [
	"John",
	"Jack",
	"Mark",
	"Ingrid",
	"Carl",
	"Pearl",
	"Ada",
	"Rose",
	"Green",
];
const result = hotPotato(names, 4);

result.eliminated.forEach((name) => {
	console.log(`${name} was eliminated from the Hot Potato Game`);
});
console.log(`the winner is ${result.winner}`);
