function lengthOfString (string, maxLenght) {
  if (length(string) <= maxLenght) {
    return true;
  }
  return false;
}

function isPolindrom (string) {
  let i = 0;
  while (string[i] === string[length(string)-i]){
    i++;
    if (i === length(string)/2-1) {
      return true;
    }
  }
  return false;
}

lengthOfString();
isPolindrom();
