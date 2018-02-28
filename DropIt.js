// https://www.freecodecamp.org/challenges/drop-it

function dropElements(arr, func) {
  // Drop them elements.
  var arrLength = arr.length;
  for (var i = 0; i <= arrLength; i++) {
    if (func(arr[0])) {
      return arr;
    }
    arr.shift();   
  }
  return arr;
}
