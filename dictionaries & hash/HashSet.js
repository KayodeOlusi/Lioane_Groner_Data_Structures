/**
 * Sometimes, different keys can have the same hash value.
 *  We will call it a collision since we will try to set different key-value pairs
 *  to the same position of the HashTable instance.
 */
const HashTable = require("./Hash");

class HashSet extends HashTable {
  constructor() {
    super();
  }

  // This method helps us to find the unique values in a hash table
  toString() {
    if (this.isEmpty()) return "";

    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}, {${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`;
    }
    return objString;
  }
}

// Usage
const hash = new HashSet();

hash.put("Ygritte", "ygritte@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Jack", "jack@email.com");
hash.put("Jasmine", "jasmine@email.com");
hash.put("Jake", "jake@email.com");
hash.put("Nathan", "nathan@email.com");
hash.put("Athelstan", "athelstan@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Aethelwulf", "aethelwulf@email.com");
hash.put("Sargeras", "sargeras@email.com");

console.log(hash.toString());
