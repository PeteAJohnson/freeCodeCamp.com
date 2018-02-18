//https://www.freecodecamp.org/challenges/roman-numeral-converter

function convertToRoman(num) {
  
  var numRoman = ''; 
  var romanNumerals = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  var decimals = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  
  for (i = decimals.length; i >= 0; i--) {
    while (decimals[i] <= num) {
      numRoman += romanNumerals[i];
      num -= decimals[i];
    }
  }
  
  return numRoman;
}

convertToRoman(1003);
