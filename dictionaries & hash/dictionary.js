export const defaultToString = (item) => {
    if(item === null) {
        return "NULL";
    } else if(item === undefined) {
        return "UNDEFINED";
    } else if(typeof item === "string" || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
};

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString(){
        return [`#${this.key} : ${this.value}`];
    }
}

class Dictionary {
    constructor(toStr = defaultToString) {
        this.table = {};
        this.toStr = toStr;
    }

    hasKey(key) {
        // check if a key exist in our table
        return this.table[this.toStr(key)] !== null;
    }

    set(key, value) {
        // check if the key and value is not undefined
        // then set assign the value to the key and push to the table
        if(key != null && value != null) {
            const tableKey = this.toStr(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        };
        return false;
    }

    remove(key) {
        // check if the key passed is in the table, then delete
        if(this.hasKey(key)) {
            delete this.table[this.toStr(key)];
            return true;
        };
        return false;
    };

    get(key) {
        // get a specific key in the table
        const valuePair = this.items[this.toStr(key)];
        return valuePair === null ? undefined : valuePair.value;

        // Different Implementation
        // {
        //     if(this.hasKey(key)) {
        //         return this.table[this.toStr(key)];
        //     }
        //     return undefined;
        // }
    };

    keyValues() {
        // Get the key values pairs of a table 
        const valuePair = [];
        for (const key in this.table) {
            if(this.hasKey(key)) {
                valuePair.push(this.table[key]);
            };
        };
        return valuePair;

        // return Object.values(this.table)
    }

    keys() {
        // Get an array of keys in the table
        const keys = [];
        const valuePairs = this.keyValues();
        for(let i = 0; i < valuePairs.length; i++) {
            keys.push(valuePairs[i].key);
        }
        return keys;

        // return this.keyValues().map(keyValue => keyValue.key);
    }

    values() {
        // Get an array of values in the table
        const values = [];
        const valuePairs = this.keyValues();
        for(let i = 0; i < valuePairs.length; i++) {
            keys.push(valuePairs[i].values);
        }
        return values;

        // return this.keyValues().map(keyValue => keyValue.value);
    }

    
}





