/**
 * A dictionary is used to store [key, value] pairs,
 *  where the key could be used to find a particular element.
 */

const defaultToString = (item) => {
    if (item === null) return "NULL";
    if (item === undefined) return "UNDEFINED";
    if (typeof item === "string" || item instanceof String) return `${item}`;

    return item.toString();
};

module.exports =  class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    // Return an array of key-value
    toString() {
        return [`#${this.key}: ${this.value}`];
    }
}

module.exports = class Dictionary {
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

   // Returns an array of all values in the dictionary
   keyValues() {
        const valuePairs = [];
        for(const k in this.table) {
            if(this.hasKey(k)) valuePairs.push(this.table[k]);
        }

        return valuePairs;
        // return Object.values(this.table);
   }

   // Returns an array of keys in the dictionary
   keys() {
       const keys = [];
       const keyValues = this.keyValues(); 
       for(let i = 0; i < keyValues.length; i++) {
           keys.push(keyValues[i].key);
       }
       return keys;
       // return this.keyValues().map(valuePair => valuePair.key);
   }

   // Returns an array of values in the dictionary
   values() {
       const values = [];
       const keyValues = this.keyValues(); 
       for(let i = 0; i < keyValues.length; i++) {
           values.push(keyValues[i].value);
       }
       return values;
       // return this.keyValues().map(valuePair => valuePair.value);
   }

   // Iterating each value-pair of the dictionary with forEach
   forEach(callbackFn) {
       const valuePairs = this.keyValues();
       for(let i = 0; i < valuePairs.length; i++) {
           const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
           if (result === false) break;
       }
   }

   // Returns how many values are stored in the dictionary
   size() {
        return Object.keys(this.table).length;
        // return this.keyValues().length
   }

   // Checks if the dictionary is empty
   isEmpty() {
       return this.size() === 0;
   }

   // Returns a string of values 
   toString() {
       if(this.isEmpty()) return "";

       const valuePairs = this.keyValues();
       let objectString = `${valuePairs[0].toString()}`;

       for(let i = 1; i < valuePairs.length; i++) {
           objectString = `${objectString}, ${valuePairs[i].toString()}`
       }
       return objectString;
   }
}

// Usage
// const dictionary = new Dictionary();

// dictionary.set("Gandalf", "gandalf hale")
// dictionary.set("John", "john hale")
// dictionary.set("Jack", "jack hale")

// console.log(dictionary.keyValues());
