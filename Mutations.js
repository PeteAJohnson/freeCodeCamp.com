//https://www.freecodecamp.org/challenges/mutations

function mutation(arr) {
  
  var splitFirstStr = arr[0].toLowerCase().split('');
  var splitSecondStr = arr[1].toLowerCase().split('');
  
  for (i = 0; i < splitSecondStr.length; i++) {
    
    if (splitFirstStr.indexOf(splitSecondStr[i]) === -1) {
      return false;
    } 
  
  }   
  return true;
}

mutation(["Hello", "hEy"]);
