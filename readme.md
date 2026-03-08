### Answers of Questions.

---

## Q1. What is the difference between var, let, and const?

Answer: The difference between var, let, and const is mainly about scope, reassignment, and how they behave in while hoisting.

var:
var is the older way to declare variables in JavaScript. It is function scoped, meaning the variable is available inside the function where it is declared. var variables is get hoisted and initialized with undefined. var variables can also be redeclared and reassigned. Because of this behavior, var can sometimes create unexpected bugs in larger programs.

let:
let is a modern way to declare variables introduced in ES6. let is block scoped, which means the variable only exists inside the block { } where it is declared, like inside a loop or an if statement. let variables also get hoisted but they maintain TDZ(Temporal Dead Zone). let variables can be reassigned, but they cannot be redeclared in the same scope.

const:
const is also block scoped like let. But const variables cannot be reassigned after they are declared. This means the value must stay the same after initialization. const is commonly used for values that should not change.

In short, var is function scoped and can be redeclared also get hoisted while Memory Allocation phase, while let and const are block scoped and maintains TDZ while Allocation phase, and const cannot be reassigned after declaration.

---

## Q2. What is the spread operator (...)?

Answer:
The spread operator (...) is used in JavaScript to expand or spread elements of an array or properties of an object into another array, object, or function.

For example, if we have an array, the spread operator can take each element from that array and spread them individually. This is commonly used to copy arrays, merge arrays, or pass multiple values into functions.

It is also used with objects to copy properties from one object into another object.

---

## Q3. What is the difference between map(), filter(), and forEach()?

Answer: The difference between map(), filter(), and forEach() is mainly about how they process array elements and what they return.

map():
map() goes through each element of an array and creates a new array by transforming every element. The new array will have the same length as the original array, but the values may be different depending on the transformation.

filter():
filter() also goes through each element of an array, but it returns only the elements that match a condition. So the new array can have fewer elements than the original array.

forEach():
forEach() is used to loop through each element of an array, but it does not return a new array. It simply runs a function for every element in the array, usually for tasks like logging values or updating something.

In short map() transforms elements and returns a new array, filter() selects elements based on a condition, and forEach() just loops through the array without returning a new array.

---

## Q4. What is an arrow function?

Answer:
An arrow function is a shorter and modern way to write functions in JavaScript, introduced in ES6.

Arrow functions use the arrow syntax ( => ) instead of the traditional function keyword. They make the code shorter and cleaner, especially for small functions.

Arrow functions are often used in callbacks, array methods like map(), filter(), and forEach(), and other situations where a short function is needed.

---

## Q5. What are template literals?

Answer:
Template literals are a modern way to create strings in JavaScript using backticks ( ` ` ) instead of quotes.

They allow us to insert variables or expressions directly inside a string using the `${ }` syntax. This is called string interpolation.

Template literals also allow multi-line strings, which means we can write text across multiple lines without using special characters.
