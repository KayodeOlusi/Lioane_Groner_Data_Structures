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
        const position = this.hashCode(key);
        const linkedList = this.table[position];

        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) return current.element.value;
            }
            current = current.next;
        }
        return undefined;
    }

    
}