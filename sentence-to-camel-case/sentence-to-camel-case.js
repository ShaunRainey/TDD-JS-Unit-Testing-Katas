/*sentenceToCamelCase(sentence, isUpperCamel)

Converts a given sentence into either UpperCamelCase or lowerCamelCase, based on the value of isUpperCamel.
*/

function sentenceToCamelCase (sentence, isUpperCamel) {
  // Your code here
  let returnString = "";
  const splitArray = sentence.split(" ");

  if(isUpperCamel === true){
    splitArray.forEach((word) => {returnString += word[0].toUpperCase() + word.slice(1)});
    }

  if(isUpperCamel === false){
    returnString += splitArray[0][0].toLowerCase() + splitArray[0].slice(1);
    for(let i=1; i<splitArray.length; i++){
      returnString += splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
    }
  }

  return returnString;
}

module.exports = sentenceToCamelCase;
