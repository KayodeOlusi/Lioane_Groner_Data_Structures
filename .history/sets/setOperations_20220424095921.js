class SetOperations extends Set {
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
      unionSet.add(values);
    }

    return unionSet;
  }
}

const setA = new SetOperations();
const setB = new SetOperations();

setA.add(1)
setA.add(2)
setA.add(3)

setB.add(4)
setB.add(5)
setB.add(6)

const unionAB = setA.union(setB);
console.log(unionAB.values)
