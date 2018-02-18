//https://www.freecodecamp.org/challenges/truncate-a-string

function truncateString(str, num) {
  
  if (num >= str.length) {
    return str;
  }
  
  else if (num <= 3) {
    var truncatedStrShort = str.substring(0, num);
    return truncatedStrShort + "...";
    
  }
  
  else {
    var truncatedStr = str.substring(0, num - 3);
    return truncatedStr + "...";
  }
  
}

truncateString("A-", 1);
