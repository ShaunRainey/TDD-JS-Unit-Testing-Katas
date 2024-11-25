// Please do not change the name of this function
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
