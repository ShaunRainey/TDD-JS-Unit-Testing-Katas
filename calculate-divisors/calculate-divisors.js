// Please do not change the name of this function
function calculateDivisors(num) {
  // Your code here
  let count = 0;

  for(let i=0; i<num; i++){
    if(i%3 === 0 || i%5 === 0){
      count += i;
    }
  }

  return count;
}

module.exports = calculateDivisors