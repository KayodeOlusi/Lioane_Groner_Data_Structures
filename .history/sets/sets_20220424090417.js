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

  size() {
    // this method would only work in modern browsers
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  sizeLegacy() {
    // Loop through the set and increment count variable for every single item in the set
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(this.items, key)) {
        count++;
      }
    }
    return count;
  }

  values() {
    // This method returns an array of all of the properties' values of a given object
    return Object.values(this.items);
  }

  valuesLegacy() {
    // This is equivalent to values() method and is supported by any browser
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }
}

const set = new Set();
console.log(set.valuesLegacy());
