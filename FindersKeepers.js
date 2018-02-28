// https://www.freecodecamp.org/challenges/finders-keepers

function findElement(arr, func) {
 
  for (var i = 0; i <= arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
