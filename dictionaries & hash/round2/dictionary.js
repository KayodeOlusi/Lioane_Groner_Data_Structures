const defaultToString = item => {
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

  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] !== null;
  }

  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }

    return false;
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)];
    }

    return undefined;
  }

  keyValues() {
    const valuePairs = [];
    for (const k in this.table) {
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k]);
      }
    }

    return valuePairs;
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  forEach(callback) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callback(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  size() {
    return this.keyValues().length;
  }

  clear() {
    this.table = {};
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;

    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`;
    }

    return objString;
  }
}

/*const dictionary = new Dictionary();

dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());
console.log(dictionary.toString());*/

module.exports = Dictionary;
