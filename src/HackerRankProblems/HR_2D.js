'use strict';

// Hacker Rank: 2D Array - DS


/**
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
 */

// Complete the hourglassSum function below.
function hourglassSum(arr) {

    let maxSum = Number.MIN_SAFE_INTEGER;
    console.log("MINL"+maxSum);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(arr[i][j]);
                let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                    arr[i+1][j+1]  +
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
                if (sum > maxSum) {
                    maxSum = sum;
            }
        }
    }
    return maxSum;
}

const testArray1 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
];
function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    /**
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

     */
    let result = hourglassSum(testArray1);

    // ws.write(result + "\n");
    // ws.end();
    console.log("Result:");

    console.log(result);
}

main();