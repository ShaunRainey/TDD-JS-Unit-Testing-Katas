// Please do not change the name of this function
function tillAddition (cash) {
  // Your code here

  if(Object.keys(cash).length === 0){return "£0.00";}

  const values = {
    "1p": 0.01,
    "5p": 0.05,
    "10p": 0.1,
    "20p": 0.2,
    "50p": 0.5,
    "£1": 1,
    "£2": 2,
    "£5": 5,
    "£10": 10,
    "£20": 20,
    "£50": 50,
  };

  let total = 0;

  for(let value in cash){
    total += values[value] * cash[value]
  }

  return `£${total.toFixed(2)}`;
};

module.exports = tillAddition;

