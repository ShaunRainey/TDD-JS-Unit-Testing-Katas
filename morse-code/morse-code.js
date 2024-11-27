// Please do not change the name of this function
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
  const wordArray = str.split("  ")
  // console.log(wordArray)
  
  wordArray.forEach((word) => {
    const strArray = word.split(" ")
  
    strArray.forEach((code) => {
      for(let char in map){
        if(map[char] === code){returnString += char ;}
      }
    })
    returnString += " "
  })
  return returnString.slice(0,-1);
}

if(toMorse === true){
  const strArray = str.split("");
  strArray.forEach((char) => {
    returnString += map[char] + " "
  })
  if(returnString.includes(undefined)){
    let result = returnString.replace(/undefined/g, " ")
    return result.slice(0,-1)
  }
  return returnString.slice(0,-1)
}

console.log(returnString);
}

module.exports = morseCode;
