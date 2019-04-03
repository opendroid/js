// Sorting: Bubble Sort
// Complete the countSwaps function below.
function countSwaps(a) {
    let n = a.length;
    let countOfSwaps = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                // swap(a[j], a[j + 1]);
                // Swap
                let temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
                countOfSwaps++;
            }
        }
    }
    console.log("Array is sorted in " + countOfSwaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length-1]);
}

// Mark and Toys
// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    prices.sort((a,b) => { return a - b;});
    let price = 0;
    for (let i = 0; i < prices.length; i++) {
        price += prices[i];
        if (price >= k) {
            return i;
        }
    }
    return i;
}

// https://www.hackerrank.com/challenges/diagonal-difference/problem
function diagonalDifference(arr) {
    let diagonal1 = 0.0;
    let diagonal2 = 0.0;

    for (let i = 0; i < arr.length; i++) {
        diagonal1 += arr[i][i];
        diagonal2 += arr[arr.length - i -1][i];
    }
    return Math.abs(diagonal1 - diagonal2);
}

let testArray = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(JSON.stringify(diagonalDifference(testArray)));

// Complete the staircase function below.
function staircase(n) {
    for (let i = 0; i < n; i++) {
        // Print spaces
        let space = "", crosses="";
        for (let j = 0; j < n-i-1; j++) {
            space += " ";
        }
        for (let j = n-i-1; j < n; j++) {
            crosses += "#";
        }
        console.log(space+crosses);
    }
}

staircase(10);