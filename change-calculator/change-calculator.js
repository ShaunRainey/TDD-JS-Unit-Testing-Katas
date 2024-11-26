// Please do not change the name of this function
function changeCalculator (num) {
  // Your code here

  if(num === 0){return "No coins for you!"}

  outstanding = num;

  changeObject = {
  "£2":0,
  "£1":0,
  "50p":0,
  "20p":0,
  "10p":0,
  "5p":0,
  "2p":0,
  "1p":0
  }

  while (outstanding !==0){
  if(outstanding >= 200){
    changeObject["£2"] = Math.floor(outstanding / 200)
    outstanding = outstanding % 200}
  else if(outstanding >= 100){
    changeObject["£1"] = Math.floor(outstanding / 100)
    outstanding = outstanding % 100}
  else if(outstanding >= 50){
    changeObject["50p"] = Math.floor(outstanding / 50)
    outstanding = outstanding % 50}
  else if(outstanding >= 20){
    changeObject["20p"] = Math.floor(outstanding / 20)
    outstanding = outstanding % 20}
  else if(outstanding >= 10){
    changeObject["10p"] = Math.floor(outstanding / 10)
    outstanding = outstanding % 10}
  else if(outstanding >= 5){
    changeObject["5p"] = Math.floor(outstanding / 5)
    outstanding = outstanding % 5}
  else if(outstanding >= 2){
    changeObject["2p"] = Math.floor(outstanding / 2)
    outstanding = outstanding % 2}
  else if(outstanding >= 1){
    changeObject["1p"] = Math.floor(outstanding / 1)
    outstanding = outstanding % 1}
}

for(let coin in changeObject){
  if(changeObject[coin] === 0){delete changeObject[coin]}
}

console.log(changeObject)

return changeObject

};

module.exports = changeCalculator;
