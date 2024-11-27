/*foldString(str)

Takes a string and reverses the letters in each word internally, while keeping the sentence order of the words intact.

For words with an odd number of letters, the middle letter remains in place. */

function foldString (str) {
  // Your code here

  let returnString = "";

  let pattern = /\w+/g;
  let match = str.match(pattern);

  match.forEach((word) => {
  let strArray = word.split("");

  let firstArray = [];
  let secondArray = [];

  for(let i=0; i< strArray.length; i++){
    if(strArray.length % 2 === 0){
      if(i<strArray.length/2){
        firstArray.push(strArray[i]);
      } else {
        secondArray.push(strArray[i]);
      }
    } else {
        if(i<strArray.length/2 -1){
          firstArray.push(strArray[i]);
        } 
        if(i>strArray.length/2) {
          secondArray.push(strArray[i]);
        }
    }
  }

  returnString += firstArray.reverse().join("");
  if(strArray.length %2 !== 0){returnString += str[Math.floor(str.length/2)];}
  returnString += secondArray.reverse().join("") + " ";
})

  return returnString.slice(0, -1);
};

module.exports = foldString
