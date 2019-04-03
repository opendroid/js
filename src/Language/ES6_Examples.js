"use strict";

/**
 * 1. Template strings
 * 2. default arguments
 * 3. rest and spread
 * 4. arrow functions
 */

console.log('_________________ LESSON 1: Arguments dictionary + Template strings  _________________');
// ES6: Rest and spread examples
//      Rest = arguments
//      spread

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
 * @param numbers
 * @returns {*}
 */
function addES6VariableArgs(...numbers) {
    // ...numbers is an array of numbers
    console.log(`addES6VariableArgs: ${JSON.stringify(numbers)}`);
    return numbers.reduce(function (accumulator, number) {
        return accumulator + number;
    })
}

console.log(`addES6VariableArgs: 2 + 3 = ${addES6VariableArgs(2,3)}`);

console.log('_________________ LESSON 2-a: Arguments as array  _________________');
// The spread syntax can have preceeding arguments
function sayStuffToFolks(greeting, farewell, ...names) {
    names.map(function (name) {
        console.log(`${greeting} ${name}`);
        console.log(`${farewell} ${name}`);
    })
}
sayStuffToFolks("Hi", "Goodbye", "Ajay", "Sofia", "Aiden");

