/**
 *  ECMAScript 2015 introduced a Map class as part of the JavaScript API
 *  Dictionary class was developed based on the Map class 
 *  The only difference between Map and Dictionary class 
 *  is that the values and keys methods return an Iterator instead of an array
 *  with the key and values
 */

const map = new Map();

map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com'); 
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has("Gandalf"));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get("Tyrion"));
