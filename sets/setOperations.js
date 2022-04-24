const Set = require("./sets")

class SetOperations extends Set {
  constructor() {
    super();
  }

  union(otherSet) {
    // Initialize an empty union set
    const unionSet = new Set();
    
    // Get the values from the first set in an array
    let values = this.values();
    for(let i = 0; i < values.length; i++) {
      // Loop through the values and add them to the union set
      unionSet.add(values[i]);
    }

    // Update the values variable of the other set we want to add 
    values = otherSet.values();
    for(let i = 0; i < values.length; i++) {
      // Loop through and add the values to the union set
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  intersection(otherSet) {
    //Initialize a new intersection set
    const intersectionSet = new Set();

    // Get the values in the first array of set
    const values = this.values();
    // Loop through the array and check if any value is in the first set
    for(let i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        // Add the value to the intersection set
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet;
  }
}

// Usage
const setA = new SetOperations();
const setB = new SetOperations();
const setC = new SetOperations();
const setD = new SetOperations();

setA.add(1)
setA.add(2)
setA.add(3)
setC.add(1)
setC.add(3)
setC.add(5)

setB.add(4)
setB.add(5)
setD.add(1)
setD.add(4)
setD.add(4)

const unionAB = setA.union(setB);
const intersectionCD = setC.intersection(setD);

console.log(unionAB.values()) // [1,2,3,4,5,6]
console.log(intersectionCD.values()) // [1]

