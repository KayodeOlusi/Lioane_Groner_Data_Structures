/**
 * A set is a collection of items that are unordered and consists of unique elements (meaning they cannot be repeated). This data structure uses the same mathematical concept as finite sets, but it is applied to a computer science data structure.
 */

class Set {
	constructor() {
		this.items = {};
	}

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
    // return element in this.items;
    // returns true if element is found in the given set
  }

  add(element) {
    // if the element doesn't exist int the set, add it to the set
    if(!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  
  delete(element) {
    // if the element exists in the set, delete from the set
    if(this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }
}


const set = new Set();
set.add(1)
set.add(2)
set.add(3)
set.add(5)
console.log(set);

