//https://www.freecodecamp.org/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  var eitherorArr = [];
  
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      eitherorArr.push(arr1[i]);
    }
  }
  
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      eitherorArr.push(arr2[i]);
    }
  }

  return eitherorArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5,6]);
