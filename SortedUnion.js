// https://www.freecodecamp.org/challenges/sorted-union

function uniteUnique() {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {    
      if (newArr.indexOf(arguments[i][j]) !== -1) {
        continue;
      }
      else {
        newArr.push(arguments[i][j]);
      }
    }          
  }
  return newArr;
}
