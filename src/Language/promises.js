"use strict";

let fs = require("fs");
/**
 * next file has a callback function that will run when readFile is done reading.
 *  the callback is called when current function stops to run.
 */
fs.readFile("./sampleTextFile.txt", function (error, data) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data.toString());
});

/**
 * Old callback pyramid  chain. If there are multiple callbacks then they were chained prior to ES6.
 * Let us read fie three times. Bad code pattern.
 */

fs.readFile("./sampleTextFile.txt", function (error, data) {
    console.log(data.toString());
    fs.readFile("./sampleTextFile.txt", function (error, data) {
        console.log(data.toString());
        fs.readFile("./sampleTextFile.txt", function (error, data) {
            console.log(data.toString());
        });
    });
});

let aSimplePromise = new Promise((resolveFn, rejectFn) => {
    let errorHappened = false;
    if (errorHappened) {
        rejectFn("Promise has failed");
    } else {
        resolveFn("Promise is fullfilled successfully");
    }
});

aSimplePromise.then((result) => {
    console.log(result.toString());
}).catch((error) => {
    console.log(error.toString());
});

/**
 * Do file read chaining using Promises
 */

function promiseFs(fileName) {
    return new Promise(
        (resolveFn, rejectFn) => {
            fs.readFile(fileName, (error, data) => {
                if (error) {
                    rejectFn(error);
                } else {
                    resolveFn(data);
                }
            });
        }
    );
}

console.log("Using promises:");
// Now this reads only one file.
promiseFs("./sampleTextFile.txt")
    .then(data => console.log(data.toString()))
    .catch(error => console.log(error.toString()));

// Chaining Promises
promiseFs("sampleTextFile.txt")
.then(() => promiseFs("sampleTextFile.txt")) // Return promiseFS. Did not use data from last read
.then(data => console.log(data.toString())) // This is called on inner Promise on line 73
.catch(error => console.log(error.toString())); // Called for all errors