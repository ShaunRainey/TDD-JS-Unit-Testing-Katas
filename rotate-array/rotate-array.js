// Please do not change the name of this function
function rotateArray (arr, num) {
  // Your code here
  let newArray = [];

  for(let i=0; i< arr.length; i++){
    let currentIndex = i;
    let newIndex = i + num;
    if(newIndex > arr.length-1){newIndex = (newIndex % arr.length)}
    // console.log("i: ", i, " current index of value: ", currentIndex, " new index will be: ", newIndex)
    newArray[newIndex] = arr[i];
    // console.log("newArray: ", newArray) 
  }
  console.log(arr)
  return newArray
};

module.exports =  rotateArray;

console.log(rotateArray([1, 2, 3], 1)) // [3, 1, 2] 
console.log(rotateArray([1, 2, 3, 4, 5], 3)) // [3, 4, 5, 1, 2]

