"use strict";

/**
 * Attribution: https://algorithms.tutorialhorizon.com/dynamic-programming-egg-dropping-problem/
 *
 * Objective:  There are n number of eggs and building which has k floors. Write an algorithm to find the minimum
 * number of drops is required to know the floor from which if egg is dropped, it will break.
 * Note:
 *   One trial is – dropping an egg once from the particular floor.
 *   If egg does not break after dropping, will be used again.
 *   If egg breaks when dropped from some floor then it will break if dropped from any higher floor.
 *   If egg does not break when dropped from some floor then it will not break if dropped from any lower floor.
 *
 * Approach:
 *   N eggs, k floors
 *   Recursion:  try dropping an egg from each floor from 1 to k and calculate the minimum number of dropping needed
 *   in worst case.
 *
 * Base cases –
 *   Eggs – 1, floors – x : play safe and drop from floor 1, if egg does not break then drop from floor 2 and so on.
 *   So in worst case x times an egg needs to be dropped to find the solution.
 *   Floors = 0: No trials are required.
 *   Floors = 1: 1 trails is required.
 *   For rest of the case, if an egg is dropped from xth floor then there are only 2 outcomes which are possible.
 *     Either egg will break OR egg will not break.
 *   If Egg breaks – check the floors lower than x. So problem is reduced is n-1 eggs and x-1 floors.
 *   If egg does not break – check the floors higher than x floors with all the n eggs are remaining.
 *   So problem is reduced to n eggs and k-x floors.
 *
 * Recursive Equation:
 *   n eggs, k floors
 *   getDrops (n, k) – given n eggs and k floor building, minimum of drops to determine the floor from which egg
 *      does not break if dropped.
 *   getDrops (n, k) = 1 + Min(x = 1,2,….k) [(drops(n-1, k-1), drops(n, k-x)]
 */


/**
 * getMinDropsRecursion: Use recursion, suffers from Overlapping Sub-problem Property
 *   https://en.wikipedia.org/wiki/Overlapping_subproblems
 *   Time complexity: 2^k
 *
 * @param n: Number of eggs
 * @param k: Number of floors
 */
let MAX_SAFE_INTEGER = 9007199254740991;

let nRecurrsions = 0;
function getMinDropsRecursion(n, k) {
  nRecurrsions++;
  // Floors: 0 floors, 0 trials. 1 floor 1 trial
  if (k <= 1) {
    return k;
  }

  // If you have one egg, use k trails from bottom to up
  if ( n <= 1) {
    return k;
  }

  // Meat
  let minDrops = MAX_SAFE_INTEGER;
  for (let x = 1; x <= k; x++) {
    let currDrops = Math.max(getMinDropsRecursion(n-1, x-1), getMinDropsRecursion(n, k-x));
    minDrops = ( minDrops < currDrops) ? minDrops : currDrops;
  }
  return 1 + minDrops;
}


/**
 * drops: Use recursion, performance is O(kn^2)
 *
 * @param n: Number of eggs
 * @param k: Number of floors
 * @returns {*}
 */
function drops(n, k) {
  let minDrops;
  let i, j, x;

  // Create array of arrays
  let eggFloors = new Array(n+1);
  for (i = 0; i <= n; i++) {
    eggFloors[i] = new Array(k+1);
  }

  // Init trial: 1 trial for 1 floor and 0 trails for 0 floors
  for (i = 1; i <= n; i++) {
    eggFloors[i][1] = 1;
    eggFloors[i][0] = 0;
  }
  // Init: j trials for j floors with 1 egg
  for (j = 1; j <= k; j++) {
    eggFloors[1][j] = j;
  }

  // Eggs:
  for ( i = 2; i <= n; i++ ) { // Eggs
    for (j = 2; j <= k; j++) { // Floors
      eggFloors[i][j] = MAX_SAFE_INTEGER;
      for (x = 1; x <= j; x++) {
        minDrops = 1 + Math.max(eggFloors[i-1][x-1], eggFloors[i][j-x]);
        eggFloors[i][j] = (minDrops < eggFloors[i][j]) ? minDrops : eggFloors[i][j];
      }
    }

  }

  return eggFloors[n][k];
}

function main(nEggs, kFloors) {
  if (kFloors < 20) {
    console.log("Eggs:" + nEggs + ", Floors:" + kFloors + ". getMinDropsRecursion:" +
      getMinDropsRecursion(nEggs, kFloors) + ", drops: " + drops(nEggs, kFloors));
    console.log("nRecurrsions:" + nRecurrsions)
  } else {
    console.log("Eggs:" + nEggs + ", Floors:" + kFloors + ", drops: " + drops(nEggs, kFloors));
  }
}

console.log("Max Int:" + MAX_SAFE_INTEGER);
main (10, 10000);