//https://www.freecodecamp.org/challenges/where-do-i-belong

function getIndexToIns(arr, num) {
  
  arr.sort(function(a,b){return a - b;});
  
  for (i=0; i <= arr.length; i++){
    if (arr[i] >= num) {
      return arr.indexOf(arr[i]);
    }
   
  }
  
  if (num >= arr[arr.length-1]) {
    return arr.indexOf(arr[arr.length -1]) + 1;
  }  
}

getIndexToIns([2, 5, 10, 11, 12, 13], 20);
