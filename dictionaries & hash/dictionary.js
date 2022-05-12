/**
 * A dictionary is used to store [key, value] pairs,
 *  where the key could be used to find a particular element.
 */

// TODO: Check for "instanceof" keyword
export const defaultToString = (item) => {
    if (item === null) return "NULL";
    if (item === undefined) return "UNDEFINED";
    if (typeof item === "string" || item instanceof String) return `${item}`;

    return item.toString();
};

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

class Dictionary {
   constructor(toStrFn = defaultToString) {
       this.table = {};
       this.toStrFn = toStrFn;
   } 

   // This method checks if a key exists in the dictionary
   hasKey(key) {
       return this.table[this.toStrFn(key)] !== null;
   }

   // This method adds a new element to the dictionary
   set(key, value) {
       if(key != null && value != null) {
           // Check and convert the key to string and add to the dictionary
           const tableKey = this.toStrFn(key);
           this.table[tableKey] = new ValuePair(key, value);
           return true;
       }
       return false;
   }

   // This method removes an element from the dictionary
   remove(key) {
        if(this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
   }


   // This method retrieves a value from a dictionary
   get(key) {
       const valuePair = this.table[this.toStrFn(key)];
       return valuePair == null ? undefined : valuePair.value;
   }
}