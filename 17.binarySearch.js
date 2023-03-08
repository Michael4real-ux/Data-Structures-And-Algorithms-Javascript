/**
 Problem: Given a sorted array of 'arr' elements and a target element 'target', find the index of 'target' in the array. Return -1 if the target element is not found

binarySearch([-5,2,4,6,10], 10) -> 4;
binarySearch([-5,2,4,6,10], 6) -> 3;
binarySearch([-5,2,4,6,10], 20)-> -1;

Note: 
- This time around its a sorted array meaning for you to perform binary search your array must be sorted

- So if you want to use binary search your array must be sorted else use linear search or sort it first before  using binary search . Note binary search is not binary search tree(LOL)

steps
- if the array is empty, return -1 as the element cannot be found.
- if the array has elements in the array. if target is equal to the middle element, return the middle element index
- if the target is less than the middle element, binary search left half of the array

- if the target is greater than the middle element, binary search right half of the array

 */

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length -1;

 while(left <= right){
    let middle = Math.floor((left + right)/2);
    if(target === arr[middle]){
        return middle;
    }else if(target < arr[middle]){
        right = middle - 1;
    }else{
        left = middle + 1;
    }
 }
 return - 1
}
console.log(binarySearch([-5,2,4,6,10], 10))
console.log(binarySearch([-5,2,4,6,10], 6))
console.log(binarySearch([-5,2,4,6,10], 20))