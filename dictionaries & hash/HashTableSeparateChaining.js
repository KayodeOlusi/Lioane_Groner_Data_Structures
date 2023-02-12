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

      if (this.table[position] == null) this.table[position] = new LinkedList();
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

  // ************Alternative using Linear Probing to tackle collisions*********************/

  // A Better way to put element in the table
  // without the use of linkedlist
  put(key, value) {
    // CHeck if key and value are valid
    if (key != null && value != null) {
      const position = this.hashCode(key);

      // Check if the position to fix the valuePair is free, insert if free
      // If not free, move to next index and check for a free position
      // Then insert
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  // A Better way to get element in the table
  // without the use of linkedlist
  get(key) {
    const position = this.hashCode(key);

    // Check if the position is not empty, if the element in the
    // position is the key value, return
    if (this.table[position] != null) {
      if (this.table[position].key === key) return this.table[position].value;

      // Increment the position to move to the next node or space
      // Check if the key in the node/space is equal to the key inputted
      // If so, return
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key != key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[index].value;
      }
    }
    return undefined;
  }

  // A Better way to get element in the table
  // without the use of linkedlist
  remove(key) {
    const position = this.hashCode(key);

    // Check if the position is not empty, if the element in the
    // position is the key value, delete node/space
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
      }

      // Increment the position to move to the next node or space
      // Check if the key in the node/space is equal to the key inputted
      // If so, delete node/space
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key != key) {
        index++;
      }

      if (this.table[index] != null && this.table[index].key == key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }

  // This helper method helps us to shift the node/values backwards
  // to avoid empty spaces/positions
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;

    // Check if the next space is not empty. if true,
    // Check if the next node key/value/position value is less than the
    // removed key/value/position value. if true, swap their position
    // and delete the next value while incrementing the position of the
    // removed value
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}
