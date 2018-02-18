//https://www.freecodecamp.org/challenges/falsy-bouncer

function bouncer(arr) {
  
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) == true)
      newArr.push(arr[i]);
  } 

  return newArr;
}

bouncer([7, "ate", "", false, 9]);
