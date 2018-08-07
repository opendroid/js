
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

let a;
if (a) {
  console.log('a is defined')
} else {
  console.log('a is undefined')
}

if (a === '') {
  console.log('a IS defined')
} else {
  console.log('a IS NOT defined')
}

if (a !== null) {
  console.log('a IS defined')
} else {
  console.log('a IS  NULL')
}

if (a !== undefined) {
  console.log('a IS defined')
} else {
  console.log('a IS UNDEFINED')
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
console.log('_________________ LESSON 5: this context _________________')
function testF(){ return this; }
// console.log(testF()); // this is global context
//let testFCopy = testF;
// console.log(testFCopy()); // this is global context
let testObj = {
    testObjFunc: testF
};
console.log(testObj.testObjFunc ()); // this is testObj context
let Person = function (name) { // Declare  person class
    this.name = name; // this is bound to constructor.
};
Person.prototype.greet = function () {
    return 'Hello Mr. ' + this.name;
};
let albert = new Person('Albert Einstein');
console.log(albert.greet());