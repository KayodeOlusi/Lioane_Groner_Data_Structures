/**
 *  Arrays are the simplest memory data structure
 * 
 */

// Initialize an array
let daysOfTheWeek = new Array(); // declare and instantiate a new array
daysOfTheWeek = new Array(7); // create and specify the length of the array
daysOfTheWeek = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'); // passing the array elements into its constructor


// Find out first 20 numbers of a fibonacci series
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(fibonacci[i])
}

//Inserting a value in the first index of an array
var arr = [2,3,4,5,6,7,8] 

const arrayLoop = (val) => {
    for (i = arr.length; i >= 0 ; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = val
    return arr
}

console.log(arrayLoop(1))

//Removing a value in the first index of an array
for (let i = 0; i < array.length; i++) {
    arr[i] = arr[i + 1];
}

// Multidimensional Array

const multidimensional = []
for (let i = 0; i < 3; i++) {
    multidimensional[i] = [];
    for (let j = 0; j < 3; j++) {
        multidimensional[i][j] = [];
        for (let z = 0; z < 3; z++) {
            multidimensional[i][j][z] = i + j + z;
        }
    }
}

// To join two arrays together
let arr1 = [-3, -2, -1, 0];
let arr2 = [1, 2, 3, 4];

const checkArr = () => {
    for (i = 0; i < arr2.length; i++) {
        arr1 = [...arr1, arr2[i]]
    }
    return arr1;
}
console.log(checkArr())


/*
using @@iterators to loop and for..of loop
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
iterator = numbers[Symbol.iterator](); // store the array values into an object
for (const n of iterator) {
    console.log(n)
}


/* 
Array entries, keys and pairs
*/

// Entries
let aEntries = numbers.entries(); // retrieves iterator of keys/value
console.log(aEntries.next().value) // [0, 1] position 0, value 1

// To loop through
for (const n of aEntries) {
    console.log(n);
}

//Keys
const aKeys = numbers.keys(); // retrieves iterator of keys
console.log(aKeys.next()); // { value: 1, done: false }
// When the iteration is done, the 'done' key would return true and value of undefined

// Values

const aValues = numbers.values();
console.log(aValues.next()); // { value: 1, done: false }

/**
 * Using Array.of()
 */

let number = Array.of(1); // numbers = [1]
let numbers = Array.of(1,2,3,4,5); //numbers = [1, 2, 3, 4, 5]

/**
 * Using copyWithin() method
 * 
 * copyWithin() copies a sequence of values of the array into the position of a start index.
 */

let copyArray = [1, 2, 3, 4, 5, 6];

copyArray.copyWithin(0, 3) // [4, 5, 6, 4, 5, 6]


/**
 * Using sort() to sort an array
 */

let numbers = [1, 4, 10, 21, 5];

numbers.sort((a,b) => a - b); // if a > b, it returns -1, if b > a, it returns 1, if a = b, it returns 0

/**
 * Manual sorting function
 */

const compareNumbers = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

// sorting strings
let names = ["Anna", "Bella", "john", "anna", "King"];

names.sort(compareNumbers)

// for lowercase strings first
names.sort((a, b) => a.localeCompare(b));
