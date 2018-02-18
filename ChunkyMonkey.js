//https://www.freecodecamp.org/challenges/chunky-monkey

function chunkArrayInGroups(arr, size) {
  
  var groupsArray = [];
  
  for (i = 0; i < (arr.length / size); i++) {
    groupsArray.push(arr.slice(size * i, size * (i+1)));
  }

  return groupsArray;

}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
