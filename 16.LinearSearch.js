/**
 Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

linearSearch([-5,2,10,4,6], 10) -> 2;
linearSearch([-5,2,10,4,6], 6) -> 4;
linearSearch([-5,2,10,4,6], 20)-> -1;

 - Simple right? LOL Yeah it is compared to the once you have solved earlier. I am just letting you the kind of algorithm you are about to solve. We will solve this using binary search in the next
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));
