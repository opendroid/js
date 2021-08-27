// Question:
//  Write the function longestSequence(input) that given an unsorted array of integers returns the longest
//  consecutive incrementing sequence. For example:
//
// longestSequence([4, 1, 5, 3]) results in [3, 4, 5]
// longestSequence([100, 4, 200, 1, 3, 2]) results in [1, 2, 3, 4]
//
// The algorithm should run in O(n) complexity.
//
// Milestones
// The candidate is able to describe the O(n log n) naive solution
// Sort the input & iterate over it
// The candidate is able to describe an O(n) solution
// Candidate able to code the O(n) solution


// Doubly linked-list node
class Node {
  constructor(value) {
    this.value = value;
  }
  setPrev(prev) {
    this.prev = prev;
  }
  setNext(next) {
    this.next = next;
  }
}

function longestSequence(input) {

  // A map of doubly linked-list nodes
  const nodes = {};

  for (let i=0; i < input.length; i++) {

    const num = input[i];
    console.log(`out: num: ${num}`);
    if (!nodes[num]) {

      const node = new Node(num);
      const prev = nodes[num - 1];
      const next = nodes[num + 1];
      console.log(`in: num: ${num} prev: ${prev}, next: ${next}`);

      if (prev) {
        prev.setNext(node);
        node.setPrev(prev);
      }

      if (next) {
        next.setPrev(node);
        node.setNext(next);
      }

      nodes[num] = node;
    }
  }


  let maxSequence = [];
  for (let num in nodes) {
    // This loop is O(n) because linkedListToArray will only
    //	traverse each node once.
    const isHead = !nodes[num].prev;

    if (isHead) {
      console.log(`IsHead: ${num}`);
      const sequence = linkedListToArray(nodes[num]);
      maxSequence = sequence.length > maxSequence.length ? sequence : maxSequence;
    }
  }

  return maxSequence;
}

function linkedListToArray(head) {
  const arr = [];
  let curNode = head;
  while(curNode) {
    arr.push(curNode.value);
    curNode = curNode.next;
  }
  return arr;
}

const input0 = [1,2,4,5];
const result0 = longestSequence(input0);
console.log("result0: ", input0 , " => ",  result0);

// const input1 = [4, 1, 5, 3];
// const result1 = longestSequence(input1);
// console.log("result1: ", result1, input1);
//
// const input2 = [100, 4, 200, 1, 3, 2];
// const result2 = longestSequence(input2);
// console.log("result2: ", result2, input2);
//
// const input3 = [];
// const result3 = longestSequence(input3);
// console.log("result3: ", result3, input3);
//
// const input4 = [1,2];
// const result4 = longestSequence(input4);
// console.log("result4: ", result4, input4);
//
// const input5 = [4,3];
// const result5 = longestSequence(input5);
// console.log("result5: ", result5, input5);
