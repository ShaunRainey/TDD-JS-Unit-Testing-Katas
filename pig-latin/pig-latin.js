/*pigLatin(str)

Translates a string into Pig Latin.

If a word starts with a consonant (or consecutive consonants), the first consonant(s) is moved to the end, followed by "ay".

If a word starts with a vowel, "way" is appended to the end.
*/

function pigLatin(str) {
  // Your code here
  const vowels = ["a","e","i","o","u"];

  let returnString = "";

  const wordArray = str.match(/\w+/g);

  wordArray.forEach((word) => {
    if(!vowels.includes(word[0].toLowerCase())){
      returnString += word.slice(1) + word[0] + "ay" + " ";
    } else {
      returnString += word + "way" + " ";
    }
  })

  return returnString.slice(0,-1);
};

module.exports = pigLatin
