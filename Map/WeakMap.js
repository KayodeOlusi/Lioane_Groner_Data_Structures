/**
 *  The WeakSet or WeakMap classes do not have the entries, keys, and values methods
 *  It is only possible to use objects as keys
 *  Another advantage of the weak versions of Maps or Sets is we can only retrieve a value if you have its key.
 *  Since these classes do not have the iterator methods (entries, keys, and values),
 *  there is no way to retrieve a value unless you know what the key is.
 */

const map = new WeakMap();

const ob1 = { name: 'Gandalf' }; 
const ob2 = { name: 'John' }; 
const ob3 = { name: 'Tyrion' };

map.set(ob1, 'gandalf@email.com'); 
map.set(ob2, 'johnsnow@email.com'); 
map.set(ob3, 'tyrion@email.com');

console.log(map.has(ob1)); 
console.log(map.get(ob3)); 
map.delete(ob2);