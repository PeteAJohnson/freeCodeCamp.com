//https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  var sum = 0;
  
  if (arr[0] ==  arr[1]) {
    return arr[0] + arr[1];
  }
  
  else if (arr[0] < arr[1]) {
    
    for (i = arr[0]; i <= arr[1]; i++) {
      sum += i; 
    }
    return sum;
  }
  
  else {
    
    for (i = arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
    return sum;   
  }  
}

sumAll([1, 4]);
