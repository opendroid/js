//
// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// Array Manipulation
// 1)the first element of array a will always remain zero since 1<= a <=b <=n; 2
// 2)the second element of array a is the second element of the array after m operations.

function arrayManipulation(n, queries) {
    let outputA = new Array(n+1);
    outputA.fill(0); // Init with zero.

    // Store the values incrementally from previous value
    for (let i = 0; i < queries.length; i++) {
        let j = queries[i][0];
        let k = queries[i][1];
        outputA[j] += queries[i][2];
        if (k + 1 <= n) {
            outputA[k+1] -= queries[i][2];
        }
    }

    // Find max
    let sum = 0, max = 0;
    for (let i = 1; i <= n; i++) {
        sum += outputA[i];
        if (max < sum) {max = sum;}
    }
    return max;
}

let addMatrix = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15]
];

console.log(arrayManipulation(10,addMatrix));
