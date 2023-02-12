/**
 * Javascript Objects are simple collections of name-value pairs
 */

// Two ways of creating an object:

var obj = new Object(); // 1
var obj = {}; // 2

// An example of an entire object
obj = {
  name: {
    firstName: "Adam",
    lastName: "Eve",
  },
  age: 50,
};

// Declare a class (constructor)
function Book(title, pages, author) {
  this.title = title;
  this.pages = pages;
  this.author = author;
}
// Instantiate the class
var book = new Book("A Day", 50, "John Bird");

// Declare functions inside a class
function Book(title, pages, author) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.printHi = function () {
    console.log("Hi");
  };
}

/**
 * Inheritance
 */

// Extend another class and inherit its behavior using the 'extends' keyword
class ITBook extends Book {
  constructor(title, pages, author, technology) {
    super(title, pages, author);
    this.technology = technology;
  }

  printHi() {
    console.log("Hi");
  }
}
// Instantiate the class
let itBook = new ITBook("A Day", 50, "John Doe", "JavaScript");

/**
 * Working with getter and setter
 */

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let myName = new Person("Frodo");
console.log(myName.name); // Frodo
myName.name = "Gandalf";
console.log(myName.name); // Gandalf
