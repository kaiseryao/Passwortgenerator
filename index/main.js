var slider = document.getElementById("länge");
var output = document.getElementById("value");

output.value = slider.value;

slider.oninput = function() {
  output.value = this.value
}

output.oninput = function() {
  slider.value = this.value
}


function getRandomNum(lbound, ubound) {
	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
}
function getRandomChar(number, lower, upper, other, extra) {
	var numberChars = "0123456789";
	var lowerChars = "abcdefghijklmnopqrstuvwxyz";
	var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var otherChars = "`~!@#$%^&*()-_=+[{]}|;:'\",<.>/? ";
	var charSet = extra;
	if (number == true)
		charSet += numberChars;
	if (lower == true)
		charSet += lowerChars;
	if (upper == true)
		charSet += upperChars;
	if (other == true)
		charSet += otherChars;
	return charSet.charAt(getRandomNum(0, charSet.length));
}
function getPassword() {
	mylength = document.getElementById('value').value;
	mylatterNumber = document.getElementById('zahlen').checked;
	mylatterLower = document.getElementById('kleinbuchstaben').checked;
	mylatterUpper = document.getElementById('grossbuchstaben').checked;
	mylatterOther = document.getElementById('sonderzeichen').checked;


	var rc = "";
	if (mylength > 0) {
		rc += getRandomChar(mylatterNumber, mylatterLower, mylatterUpper, mylatterOther);
	}
	for (var idx = 1; idx < mylength; ++idx) {
		rc += getRandomChar(mylatterNumber, mylatterLower, mylatterUpper, mylatterOther);
	}
	document.getElementById('genPasswort').value = rc;
  document.getElementById('genPasswort').disabled = false;
  document.getElementById('copybutton').style.display = 'inline-block';

}

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("genPasswort");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  $('#copybutton').value('Copied!');
}     