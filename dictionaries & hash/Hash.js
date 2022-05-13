/**
 * Hashing consists of finding a value in a data structure in the shortest time possible
 */
const Dictionary = require("./Dictionary");
const ValuePair = require("./Dictionary");

class HashTable extends Dictionary {
    constructor(toStrFn, table) {
        super(toStrFn, table);
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
    hasCode(key) {
        return this.loseloseHashCode(key);
    }

    // This method inserts a value in the hash table
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hasCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
}