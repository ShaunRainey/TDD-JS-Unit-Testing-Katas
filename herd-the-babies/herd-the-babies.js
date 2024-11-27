/* herdTheBabies(str)

Sorts the characters in a string such that each uppercase "parent" letter precedes its corresponding lowercase "baby" letters.

The output is a string sorted alphabetically with the parent letters appearing before their baby letters.
*/

function herdTheBabies (str) {
  // Your code here
  let herdedString = "";
  const alphabet = ["A", "a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];

  for(let i=0; i< alphabet.length; i++){
    for(let j=0; j<str.length; j++){
      if(str[j] === alphabet[i]){
        herdedString += str[j];
      }
    }
  }
   return herdedString;
};

module.exports = herdTheBabies;
