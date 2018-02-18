//https://www.freecodecamp.org/challenges/title-case-a-sentence

function titleCase(str) {
  
  var wordsInString = str.split(" ");
  
  var capitalizedString = wordsInString[0].charAt(0).toUpperCase() + wordsInString[0].slice(1).toLowerCase();
  
  for (i = 1; i < wordsInString.length; i++){
    var nextWord = wordsInString[i].charAt(0).toUpperCase() + wordsInString[i].slice(1).toLowerCase();
    capitalizedString = capitalizedString.concat(" " + nextWord);
  }
  return capitalizedString;
}

titleCase("I'm a little tea pot");
