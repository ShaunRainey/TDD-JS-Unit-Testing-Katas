// Please do not change the name of this function
function rotateArray (arr, num) {
  // Your code here
  let newArray = [];

  let revArray = arr.slice(0).reverse();
  
  for(let i=0; i< revArray.length; i++){

    let newIndex = num < 0 ? i - num : i + num; 
    if(num < 0){
      if(newIndex > arr.length-1){newIndex = (newIndex % revArray.length)}
        newArray[newIndex] = revArray[i];
    } else {
      if(newIndex > arr.length-1){newIndex = (newIndex % arr.length)}
        newArray[newIndex] = arr[i];
    }
  }
    return  num < 0 ? newArray.reverse() : newArray;
};

module.exports =  rotateArray;
