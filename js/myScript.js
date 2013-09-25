// Phone Number Prompt
var phoneNum = prompt("What is your phone number? Please enter with -'s in the appropriate spots. XXX-XXX-XXXX  Don't worry, your phone number will NEVER be used for spam.");
if(phoneNum[3] === "-" && phoneNum[7] === "-" && phoneNum.length === 12) {
 	alert("Thanks!  The number we have for you is " + phoneNum + ".");
}
else {
	alert("Check your format: XXX-XXX-XXXX Let's try again!");
	 phoneNum = prompt("What is your phone number? Please enter with -'s in the appropriate spots. XXX-XXX-XXXX  Don't worry, your phone number will NEVER be used for spam.");
	if(phoneNum[3] === "-" && phoneNum[7] === "-" && phoneNum.length === 12){
		alert("Thanks!  The number we have for you is " + phoneNum + ".");
}
}

// Birth Date Prompt
var birthDate = prompt("Ok! How about your birth date? Please use XX/XX/XX format!");
if(birthDate[2] === "/" && birthDate[5] === "/" && birthDate.length === 8) {
	alert("Awesome!  Looks like you were born on " + birthDate + "!");
}
else {
	alert("Look's like you forgot something! Let's try again!");
	 birthDate = prompt("Ok! How about your birth date? Please use XX/XX/XX format!");
	if(birthDate[2] === "/" && birthDate[5] === "/" && birthDate.length === 8) {
		alert("Awesome!  Looks like you were born on " + birthDate + "!");
}
}

// State Abbreviation
var stateAbbr = prompt("What's the abbreviation for the state you live in? Please use all capital letters!");
if (stateAbbr === stateAbbr.toUpperCase() && stateAbbr.length === 2) {
	alert("Thanks! You live in " + stateAbbr + "!");
}
else {
	alert("Look's like you may need to re-enter that.  Remember, please use capital letters on your 2-digit state abbreviation!")
	 stateAbbr = prompt("What's the abbreviation for the state you live in? Please use all capital letters!");
	if (stateAbbr === stateAbbr.toUpperCase() && stateAbbr.length === 2) {
	alert("Thanks! You live in " + stateAbbr + "!");
}
}

// Married
var married = prompt("Are you married? Yes/No");
var marriedReport = married.substring(1)
if ((married === married.toUpperCase() || married === married.toLowerCase() || married === married.charAt(0).toUpperCase()) && married.length > 0) {
	alert("Are you married? " + married.charAt(0).toUpperCase() + marriedReport.toLowerCase() + ".")
}
else {
	alert("Oops! Remember to answer with a simple yes or no!");
	 married = prompt("Are you married? Yes/No");
	if ((married === married.toUpperCase() || married === married.toLowerCase() || married) && married.length > 0) {
	alert("Are you married? " + married.charAt(0).toUpperCase() + marriedReport.toLowerCase() + ".")
}
}