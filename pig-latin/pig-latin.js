// Please do not change the name of this function
function pigLatin(str) {
  // Your code here
  const vowels = ["a","e","i","o","u"];

  let returnString = "";

  const wordArray = str.match(/\w+/g)

  wordArray.forEach((word) => {
    if(!vowels.includes(word[0].toLowerCase())){
      returnString += word.slice(1) + word[0] + "ay" + " ";
    } else {
      returnString += word + "way" + " "
    }
  })

  return returnString.slice(0,-1);
};

module.exports = pigLatin
