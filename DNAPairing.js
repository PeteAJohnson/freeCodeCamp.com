// https://www.freecodecamp.org/challenges/dna-pairing

function pairElement(str) {
  
  pairArr = [];
  strArr = str.split('');
  
  strArr.forEach(function(index){
    if (index === 'A') {
      pairArr.push([index,'T']);
    }
    else if (index === 'T') {
      pairArr.push([index,'A']);
    }
    else if (index === 'C') {
      pairArr.push([index,'G']);
    }
    else if (index === 'G') {
      pairArr.push([index,'C']);
    }
  });
  
  return pairArr;
}

pairElement("AAA");
