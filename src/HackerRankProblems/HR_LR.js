// Arrays: Left Rotation
// Complete the rotLeft function below.
// Complete the rotLeft function below.
// Complete the rotLeft function below.
function rotLeft(a, d) {
  let rotations = d % a.length;
  let rotated = new Array(a.length);
  for (let i = rotations; i < a.length; i++) {
    rotated[i-rotations] = a[i]
  }
  // Copy array to rotated
  for (let i = 0; i < rotations; i++) {
    rotated[a.length-rotations+i] = a[i];
  }

  return rotated;
}

let array = [1,2,3,4,5];
console.log(JSON.stringify(rotLeft(array,6)));
