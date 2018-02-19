//https://www.freecodecamp.org/challenges/missing-letters

function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var strRange = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str.slice(-1)));
  var missingLetter = '';

  for (i = 0; i < strRange.length; i++) {
      
    if (str[i] !== strRange[i]) {        
      missingLetter = strRange[i];
      return missingLetter;
    }       
  }      
  return undefined;
}

fearNotLetter("bcd");
