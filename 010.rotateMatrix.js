/**
 Instructions
A matrix in JavaScript can be represented as an array of arrays. For example, here is a 3 x 3 matrix:

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
Write a function that takes a matrix as input and returns a new matrix. This new matrix should represent the original matrix rotated 90 degrees clockwise. The original matrix should be unchanged. This function should work for both square and rectangular matrixes.

Input: Array of Arrays of Numbers

Output: Array of Arrays of Numbers

Example
When given the matrix above as input, the output should be:

[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]
Hints
We’ll need to start by creating a new, empty matrix.
The new matrix dimensions will need to be switched, e.g. 2 x 3 becomes 3 x 2.
We’ll need to process every item.
 */

function rotateClockwise(matrix) {
  // Your code here
  const newMatrix = matrix[0].map(() => []);
  console.log(newMatrix);
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    for(let j =0; j < matrix[0].length; j++){
        newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  console.log(newMatrix)
}
console.log(
  rotateClockwise(
    [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  )
); // -> [
    //      [7, 4, 1],
//          [8, 5, 2],
//          [9, 6, 3]
//       ] // 90 degrees

// [[9,8,7],[6,5,4], [3,2,1]] // 180 degrees
