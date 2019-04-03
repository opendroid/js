"use strict";

// LESSON 1: Automatic conversion
console.log('_________________ LESSON 1: Automatic conversion _________________');
console.log("4"-2); // 2
console.log("4"+2); // 42
console.log("4"*2); // 8
console.log("five"-1); // NaN
console.log('Compare null and undefined');
console.log('null==undefined:'+ (null==undefined));
console.log('null===undefined:'+ (null===undefined));

console.log("null==:''"+(null==''));
console.log("null===:''"+(null==''));

console.log("undefined==''" + (undefined==''));
console.log("undefined===''" + (undefined===''));

// LESSON 2: null or undefined.
// to check a variable as check as null or undefined or ''
console.log('_________________ LESSON 2: null or undefined _________________');

let a, b;
if (a) {
  console.log('a is defined');
} else {
  console.log('a is undefined');
}

if (a === '') {
  console.log('a IS defined');
} else {
  console.log('a IS NOT defined');
}

if (a !== null) {
  console.log('a IS defined');
} else {
  console.log('a IS  NULL');
}

if (a !== undefined) {
  console.log('a IS defined');
} else {
  console.log('a IS UNDEFINED');
}
a = null;
if (a) {
  console.log('a has a value');
} else {
  console.log('a has NO value');
}

a='';
if (a) {
  console.log('a has a value:'+a);
} else {
  console.log('a has NO value');
}

a='Hello';
if (a) {
  console.log('a has a value:'+a);
} else {
  console.log('a has NO value');
}

a=undefined;
if (a) {
  console.log('a has a value:'+a);
} else {
  console.log('a has NO value');
}

b = a || 5; // If a is undefined or 0, use 5. Falsy
console.log(`b = ${a} || 5 = ${b}`);


// LESSON 3: JSON Objects
console.log('_________________ LESSON 3: JSON Objects _________________');

let items = {
  number: 2,
  values: [{name: 'Stockings', price:120.0},{name:'Socks', price:100}],
  addresses: [
    null
  ]
};
console.log('items:'+JSON.stringify(items,null,''));
console.log('items.number:' + items.number);
console.log('items.values:count:' + items.values.length + ', value[0]'+ items.values[0].name);
console.log('items.addresses:' + items.addresses.length);

// LESSON 4: Function Arguments
console.log('_________________ LESSON 4: Function Arguments _________________');
let add = function () {
    let total = 0;
    for (let i = 0;i < arguments.length;i++){
      total += arguments[i]; // Not an array, but an array indexing notation
        // Convert to array using
        // var args = Array.prototype.slice.call(arguments);
    }
    return total;
};
console.log(add(1,2,3,4,5,6,7,8,9,10));
console.log(add(-1,-2,-3,-4,-5,-6,-7,-8,-9,-10));

// LESSON 5: this
console.log('_________________ LESSON 5: this context _________________');
function testF(){ return this; }
// console.log(testF()); // this is global context
//let testFCopy = testF;
// console.log(testFCopy()); // this is global context
let testObj = {
    testObjFunc: testF
};
console.log(JSON.stringify(testObj.testObjFunc())); // this is testObj context
let Person = function (name) { // Declare  person class. via function in JS
    this.name = name; // this is bound to constructor.
    // When called with new this function implicitly returns "this"
};

// Function defined in class prototypes.
// What is `this` referring to here
Person.prototype.greet = function () {
    return 'Hello Mr. ' + this.name; // this?
};
let albert = new Person('Albert Einstein'); // new binds this to Person albert
console.log(albert.greet()); // greet invoked with albert
let aiden = new Person('Aiden Thakur'); // new binds this to Person aiden: dynamic scope not lexical scope
console.log(aiden.greet()); // greet invoked with aiden

// LESSON 6: bind, apply, call
// this incidentally refers to current calling object.
//  Mechanisms that set the value of this: [new . bind apply and => functions]
console.log('_________________ LESSON 6: this context bind, call and apply _________________');

let greetUnbound = aiden.greet; // Save the function
let ajay = {name: "Ajay Thakur"}; // Any aribitrary object
console.log("Bound to this Obj: " + greetUnbound.call(ajay)); // Call ony object with name property.
// Apply works same as call except subsequent arguments are bundled as array
// greetUnbound.call(thisObj,  arg1, arg2, arg3), c ... call with comma
// greetUnbound.apply(thisObj,  [arg1, arg2, arg3]) <== arguments are passed as array. a ... array

// bind with bound the object for life with a specific object
let sayBritney = greetUnbound.bind({"name":"Britney"});
console.log("Bound to Britney: " + sayBritney());

console.log('_________________ LESSON 7: Scope mining in => functions _________________');
Person.prototype.saysHelloAfterOneSec = function () {
    setTimeout(function () {
        console.log(`Hello from ${this.name}`); // this is not bound to caller object
    }, 1000);
};
aiden.saysHelloAfterOneSec(); // ${this.name} will be Aiden.

Person.prototype.saysHelloAfterOneSecWithArrow = function () {
    setTimeout( () => {
        console.log(`Hello from ${this.name}`); // this is bound to caller object
    }, 1000);
};

aiden.saysHelloAfterOneSecWithArrow(); // ${this.name} will be Aiden as this is bound in arrow functions

console.log('_________________ LESSON 8: Module imports _________________');

let oldStyleShowMeLyrics = require("./aModuleToImport").showMeLyrics;
let oldStyleShowMeNames = require("./aModuleToImport").showMeNames;

oldStyleShowMeLyrics();
oldStyleShowMeNames();

// Note node does not support ES6 imports yet. You need to transpile
//import {showMeLyrics,  showMeNames} from "./aModuleToImport";
//showMeLyrics();
//showMeNames();