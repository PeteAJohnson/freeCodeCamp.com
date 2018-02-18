//https://www.freecodecamp.org/challenges/caesars-cipher

function rot13(str) { 
  
  var rotString= "";
  var charInString;
 
  for (i = 0; i < str.length; i++) {
    
    charInString = str.toUpperCase().charCodeAt(i);
  
      if (charInString < 65 || charInString > 90) {
        
      }
  
      else {     
        
        charInString += 13;
        
        if (charInString > 90) {
          
          charInString = (charInString - 90) + 64;
        
        } 
        
      }
    
    rotString += String.fromCharCode(charInString);
  
  }

  return rotString;
  
}

rot13("sdf sdfsdf");
