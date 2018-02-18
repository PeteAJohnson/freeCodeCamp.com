//https://www.freecodecamp.org/challenges/factorialize-a-number

function factorialize(num) {
  if (num > 0) {
    for (i = num - 1; i > 1; i--) {
      num *=i;
    }
    return num;
  } 
  else {
    return 1;
  }
}

factorialize(5);
