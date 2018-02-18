//https://www.freecodecamp.org/challenges/seek-and-destroy

function destroyer(arr) {
  
  var argsArray = Array.prototype.slice.call(arguments);
  
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < argsArray.length; j++) {
      if (arr[i] === argsArray[j]) {
        delete arr[i];
      }
    }
  }
  filteredArr = arr.filter(function(x) {return Boolean;});
  return filteredArr;  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

