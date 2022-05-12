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

class Dictionary {
   constructor(toStrFn = defaultToString) {
       this.table = {};
       this.toStrFn = toStrFn;
   } 
}