// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// Complete the minimumSwaps function below.
// https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
// ans = Σi = 1k(cycle_size – 1), where k is the number of cycles
function minimumSwaps(arr) {
  let i, count = 0, n = arr.length;
  for (i = 0; i < n; i++) {
    if (arr[i] === (i + 1)) {
      continue;
    }
    let j = arr[i]-1;
    if(j >= 0 && j < arr.length) {
      // Swap
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      count++;
      console.log("["+i+"]:" + arr[i] + ", swapped with ["+arr[j]+"]");
      i--;
    }
    console.log(JSON.stringify(arr));
  }
  return count;
}

let testArray = [4, 3, 1, 2];
console.log(minimumSwaps(testArray));
testArray = [2, 4, 5, 1, 3];
console.log(minimumSwaps(testArray));
