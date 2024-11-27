/*morseCode(str)

Decodes a given morse code string.

The morse code input string will have a space between each letter and three between each word.

Extension
morseCode(str, toMorse)

Extend the function to take a second argument toMorse, which specifies whether to decode or convert a string to morse code.

When toMorse is true, converts the string into morse code. When toMorse is false, decodes the string.
*/

function morseCode (str, toMorse) {
  // Your code here
const map = {
A: ".-"   , 
B: "-..."  ,
C: "-.-." ,
D: "-.."   ,
E: "."     ,
F: "..-."  ,
G: "--."   ,
H: "...."  ,
I: ".."    ,
J: ".---"  ,
K: "-.-"   ,
L: ".-.."  ,
M: "--"    ,
N: "-."    ,
O: "---"   ,
P: ".--."  ,
Q: "--.-"  ,
R: ".-."   ,
S: "..."   ,
T: "-"     ,
U: "..-"   ,
V: "...-"  ,
W: ".--"   ,
X: "-..-"  ,
Y: "-.--"  ,
Z: "--.."  ,
0: "-----" ,
1: ".----" ,
2: "..---" ,
3: "...--" ,
4: "....-" ,
5: "....." ,
6: "-...." ,
7: "--..." ,
8: "---.." ,
9: "----." 
};

let returnString = "";

if(toMorse === false){
  const wordArray = str.split("  ");
  
  wordArray.forEach((word) => {
    const strArray = word.split(" ");
  
    strArray.forEach((code) => {
      for(let char in map){
        if(map[char] === code){returnString += char ;}
      }
    })
    returnString += " ";
  })
  return returnString.slice(0,-1);
}

if(toMorse === true){
  const strArray = str.split("");
  strArray.forEach((char) => {
    returnString += map[char] + " ";
  })
  if(returnString.includes(undefined)){
    let result = returnString.replace(/undefined/g, " ");
    return result.slice(0,-1);
  }
  return returnString.slice(0,-1);
}
}

module.exports = morseCode;
