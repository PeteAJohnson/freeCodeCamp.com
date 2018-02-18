// https://www.freecodecamp.org/challenges/reverse-a-string

function reverseString(str) {
  var splitString = str.split("");
  splitString.reverse();
  var reversedString = splitString.join('');
  return reversedString;
}

reverseString("hello");
