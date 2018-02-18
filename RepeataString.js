//https://www.freecodecamp.org/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
  if ( num < 0) {
    return "";
  }
  
  else {
    
    var repeatingStr = "";
    
    for (i = 0; i < num; i++) {
      repeatingStr = repeatingStr.concat(str);
    }
    
    return repeatingStr;
    
  }
 
}

repeatStringNumTimes("abc", 3);
