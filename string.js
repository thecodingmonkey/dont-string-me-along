function digitCheck(string) {
  var resultDigits = "";
  var i;

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
