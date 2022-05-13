/**
 * Hashing consists of finding a value in a data structure in the shortest time possible
 */
const Dictionary = require("./Dictionary");
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

module.exports = class HashTable extends Dictionary {
    constructor(table, toStrFn) {
        super(table, toStrFn);
    }

    // This method generates a code/number as a key to store a value in the hash table
    loseloseHashCode(key) {
        if (typeof key === "number") return key;

        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }

        return hash % 37;
    }

    // Returns the key of the value in the hash table
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    // This method inserts a value in the hash table
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    // This method retrieves a value from the hash table
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    
    // This method removes a value from the hash table
    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }
}

// Usage
// const hash = new HashTable();

// hash.put("Gandalf", "Wizard@gmail.com");
// hash.put("Frodo", "Hobbit@gmail.com");
// hash.put("Sam", "Friend@gmail.com");

// console.log(hash.hashCode("Gandalf") + " Gandalf");
// console.log(hash.hashCode("Frodo") + " Hobbit");
// console.log(hash.hashCode("Sam") + " Friend");
// console.log(hash.get("Gandalf"));

