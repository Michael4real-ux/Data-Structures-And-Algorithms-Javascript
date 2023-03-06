/*
Move all zeros to the End.
input [0, 1] -> [1,0]
input [1, 0, 2, 0, 4, 0] -> [1,2,4,0,0]
input [0, 0,4] -> [4,0,0]
*/

// Brute force Approach
function moveAllZeros(arr){
  // let newArr = [];
  // let count = 0;
  // for(let char of arr){
  //   if(char !== 0){
  //       newArr.push(char)
  //   }else if(char === 0){
  //       count++
  //   }  
  // }

  // for(i=0; i<count; i++){
  //   newArr.push(0)
  // }
  // return newArr
  
  //Solution 2(optimized)

  let count = 0
  for(let char of arr){
    if(char !== 0){
     arr[count++] = char
    }
  } 

  for(let i = count; i < arr.length; i++){
    arr[i] = 0
  }

  return arr
}

//Time Complexity - 0(n) - linear time even if we have multiple for loops 
// they are not nested 0(n) + 0(n) = 0(n)
// Space complexity - 0(1) - no extra space created
console.log(moveAllZeros([0, 1]))
console.log(moveAllZeros([1, 0, 2, 0, 4, 0]))
console.log(moveAllZeros([0, 0, 4]))