//https://www.freecodecamp.org/challenges/check-for-palindromes

function palindrome(str) {
 
 return str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase() === str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase().split('').reverse().join('');
  
}

palindrome("eye");
