//https://www.freecodecamp.org/challenges/search-and-replace

function myReplace(str, before, after) {
  
  var splitStr = str.split(' ');
  
  for ( i = 0; i < splitStr.length; i++ ) {
   
    if (splitStr[i].charAt(0) == splitStr[i].charAt(0).toUpperCase() && splitStr[i] == before) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
      splitStr[i] = after;
      break;
    }
    
    else if (splitStr[i] == before) {
      splitStr[i] = after;
      break;
    }
    
  }
  
  var afterStr = splitStr.join(' ');
  return afterStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
