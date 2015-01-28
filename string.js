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
