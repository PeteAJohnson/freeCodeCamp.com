//https://www.freecodecamp.org/challenges/pig-latin

function translatePigLatin(str) {
  
  var pigLatinStr = '';
  
  if (str.charAt(0) == 'a' ||
      str.charAt(0) == 'e' ||
      str.charAt(0) == 'i' ||
      str.charAt(0) == 'o' ||
      str.charAt(0) == 'u') {
  
        return str+'way';
  }
  
  else {
    
    for (i = 0; i < str.length; i++)
      if (str.charAt(i) != 'a' &&
          str.charAt(i) != 'e' &&
          str.charAt(i) != 'i' &&
          str.charAt(i) != 'o' &&
          str.charAt(i) != 'u') {
        
            continue;  
      }
      else {
        return str.slice(i)+str.substr(0,i)+'ay';
      }           
  }  
}

translatePigLatin("glove");
