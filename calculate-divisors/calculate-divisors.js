/*calculateDivisors(num)

Takes a number num and returns the sum of all multiples of 3 and 5 below that number. 

*/
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