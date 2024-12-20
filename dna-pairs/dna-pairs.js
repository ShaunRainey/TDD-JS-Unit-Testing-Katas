/*dnaPairs(dna)

Takes a string representing a DNA sequence and returns a nested array for each base, containing the base paired with its complement.

In DNA, C pairs with G, and T pairs with A.

*/

function dnaPairs(dna) {
  // Write your code here
  let newArray = [];
  for(let i=0; i<dna.length; i++){
    if(dna[i] === "G"){newArray.push(["G","C"]);}
    else if(dna[i] === "C"){newArray.push(["C","G"]);}
    else if(dna[i] === "A"){newArray.push(["A","T"]);}
    else if(dna[i] === "T"){newArray.push(["T","A"]);}
    }
    
    return newArray;
  }

module.exports = dnaPairs;
