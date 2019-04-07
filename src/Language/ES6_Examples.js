"use strict";

/**
 * Source: safaribooks https://learning.oreilly.com/playlists/682b60e2-3e64-4a0d-b1c9-5c6e86c7b127
 *    React by Charles Crawford
 *
 * 1. Template strings
 * 2. default arguments
 * 3. rest and spread
 * 4. arrow functions
 */

console.log('_________________ LESSON 1: Arguments dictionary + Template strings  _________________');
/**
 *
 * ES6: Rest and spread examples
 *
 * Source: https://javascript.info/rest-parameters-spread-operator
 *
 * When we see "..." in the code, it is either rest parameters or the spread operator.
 * There’s an easy way to distinguish between them:
 *
 *   When ... is at the end of function parameters, it’s “rest parameters”
 *            and gathers the rest of the list of arguments into an array.
 *   When ... occurs in a function call or alike, it’s called a “spread operator”
 *            and expands an array into a list. Use patterns:
 *
 *   Rest parameters are used to create functions that accept any number of arguments.
 *   The spread operator is used to pass an array to functions that normally require a list of many arguments.
 *   Together they help to travel between a list and an array of parameters with ease.
 *
 *   Note that Arrow functions do not have "arguments"
 *
 * @returns {T | (function(*, *): *)}
 */
function addReadFromArgumentsES5() {
  // Default arguments are an JS object {"0": "Value 1", "1": "Value 2"}
  console.log(`Function addReadFromArgumentsES5 arguments: ${JSON.stringify(arguments)}`);
  return Array.prototype.reduce.call(arguments, function (accumulator, value) {
    return accumulator + value;
  });
}

console.log(`addReadFromArgumentsES5: 2 + 3 = ${addReadFromArgumentsES5(2,3)}`);

console.log('_________________ LESSON 2: Arguments as array  _________________');
/**
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 * Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more
 * arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded
 * in places where zero or more key-value pairs (for object literals) are expected.
 *
 * The param ...rest must be at the end. Can not be in middle: https://javascript.info/rest-parameters-spread-operator
 *
 * @param numbers
 * @returns {*}
 */
function addES6VariableArgs(...numbers) {
  // ...numbers is an array of numbers []
  console.log(`addES6VariableArgs: ${JSON.stringify(numbers)}`);
  return numbers.reduce(function (accumulator, number) {
    return accumulator + number;
  })
}
console.log(`addES6VariableArgs: 2 + 3 = ${addES6VariableArgs(2,3)}`);

console.log('_________________ LESSON 2-a: Arguments as array (rest) and spread _________________');
// The spread syntax can have proceeding arguments
function sayStuffToFolks(greeting, farewell, ...names) {
  names.map(function (name) {
    console.log(`${greeting} ${name}`);
    console.log(`${farewell} ${name}`);
  })
}
sayStuffToFolks("Hi", "Goodbye", "Ajay", "Sofia", "Aiden");
// Pass first two args as spread. See array ["Hi", "Goodbye"] spread into first two elements.
sayStuffToFolks(...["Hi", "Goodbye"], "Ajay", "Sofia", "Aiden");

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
let arr3 = [...arr1, ...arr2]; // Spread arr1 and arr2

//Spread operator
console.log(`Spread: Max element in arrays ${arr1} and ${arr2} is ${Math.max(...arr1, ...arr2)}`); // 8
console.log(`Combined array is ${arr3}`);

let characterinAidenThakue = [..."Aiden Thakur"]; // Spreads string
console.log(`Charaters in ${"Aiden Thakur"} are ${characterinAidenThakue}`);

console.log('_________________ LESSON 3: Arrow functions _________________');
let origNumbers = [10, 20, 30];
let origNumbersSq = origNumbers.map (n => n * n);
/**
 * The arrow function .map(n => n * n) is equivalent of
 * .map (function(n) {
 *     return n * n; // If only one line no return and {} }in => function is required
 * });
 */
console.log(`origNumbersSq = ${origNumbersSq}`);

console.log('_________________ LESSON 4: ES6: Destructuring _________________');
let [first, , third, ] = arr1; // destruct array skip reading second and forth
console.log(`first ${first} and third ${third}`);
[first, third] = [third, first]; // Swap first third
console.log(`Swapped first ${first} and third ${third}`);

let aiden = {
  name: "Aiden Thakur",
  grade: 8,
  hobbies: ["Java", "working out", "try stuff out"]
};
// Declare variables
//   childName: assign to it property "name"
//   childGrade: assign to it property "grade"
//   childHobbies: assign to it property "hobbies"
//  initialize from object aiden
//  Can be in any order and select any or all properties, ignore rest.
let {name: childName, grade: childGrade, hobbies: childHobbies} = aiden;
console.log(`name: ${childName}, grade: ${childGrade}, hobbies: ${childHobbies}`);

// If local variable names are same as property names you can reduce syntax to
// Used more frequently.
let {name, grade, hobbies} = aiden;
console.log(`Shorthand: name: ${name}, grade: ${grade}, hobbies: ${hobbies}`);

// Destructure inside destructure, you can mix and match
let someNumbers = [[-1,-2,-3], [1,2,3]];
let [[minusOne,,minusThree], positiveArray] = someNumbers;
console.log(`minusOne: ${minusOne}, minusThree: ${minusThree} and positiveArray: ${positiveArray}`);

// ES6 Fetch
// URL: https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
let fetch = require("node-fetch");
fetch("http://www.usense.io")
  .then(response => response.text())
  .then(body => console.log(body));
