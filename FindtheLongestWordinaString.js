//https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  
  var wordsInString = str.split(" ");
  
  var longestWord = 0;
  
  for (i = 0; i < wordsInString.length; i++) {
    if (wordsInString[i].length > longestWord) {
      longestWord = wordsInString[i].length;
    }
  }
  
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
