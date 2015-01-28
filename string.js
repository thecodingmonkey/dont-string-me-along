function digitCheck(string) {
  var resultDigits = "";
  var i;

  // check if each digit is in the string.  by default these are integers so
  // toString() is likely necessary.
  for(i=0; i <= 9; i++) {
    if (string.indexOf(i.toString()) == -1 ) {
      resultDigits += i.toString();
    }
  }

  return resultDigits;
}

function reverseName(origName) {
  var words = origName.split(" ");
  return words[1] + ", " + words[0];
}


function circularCheck(substring, string) {
  // if substring is in a circular version of string, it would be in the string
  // repeated once.  HOWEVER, this also means its possible substring could be
  // longer than the search string (e.g. 'arfooba' in 'foobar'), so the lengths
  // need to be checked as well.
  return ((string + string).indexOf(substring) != -1) && (substring.length < string.length);
}

function palindromeCheck(string) {
  // split to characters, reverse array, join back into a word to get the reversed version
  // and just compare them.  (Thanks Mika!)
  return string == string.split("").reverse().join("");
}

function palindromeFinder(string) {
  if (palindromeCheck(string)) {
    console.log('string');
 //   return string;
  }

  if (string.length > 2) {
    palindromeFinder(string.substr(0, string.length - 1))
    palindromeFinder(string.substr(1, string.length - 1))
    
  }

}
