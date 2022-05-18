/**
 * The separate chaining technique consists of creating a linked 
 *  for each position of the table and storing the elements in it.
 *  It is the simplest technique to handle collisions;
 *  however, it requires additional memory outside the HashTable instance.
 */

const HashTable = require("./Hash");
const Node = require("../linked list/linkedlist");
const LinkedList = require("../linked list/linkedlist");

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    // Return an array of key-value
    toString() {
        return [`#${this.key}: ${this.value}`];
    }
}

class HashTableSeparateChaining extends HashTable {
    constructor(table, toStrFn) {
        super(table, toStrFn);
    }

    // This method inserts a value into the hash table
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashKey(key);

            if(this.table[position] == null) this.table[position] = new LinkedList();
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    // Get a value from the hash table
    get(key) {
        // Get the positions and the list
        const position = this.hashCode(key);
        const linkedList = this.table[position];

        // Loop through the linkedList instance of table valuePair
        // and find the value with the key 
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) return current.element.value;
                current = current.next;
            }
        }
        return undefined;
    }

    // Remove a value from the table
    remove(key) {
        // Get the positions and the list
        const position = this.hashCode(key);
        const linkedList = this.table[position];

        // Check if linkedList instance of table valuePair is not empty
        // and loop through it to find the element to delete 
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    
}