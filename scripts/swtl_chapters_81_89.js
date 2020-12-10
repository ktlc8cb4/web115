// JavaScript Document
/* eslint-disable */

function chapter81() {
	var testPop = window.open("","","width=100,height=100");
	if(testPop === null || typeof(testPop) === "undefined"){
	    document.getElementById("guess81").innerHTML = "Please disable your popup blocker.";	
	} else {
		document.getElementById("guess81").innerHTML = "Thank you for allowing PopUps.";
	}
	testPop.close();
} 
	
function chapter82() {
	var lastName = document.getElementById("lastname");
    if(lastname.value.length === 0) {
		document.getElementById("guess82").innerHTML= "Please make sure you have entered your last name.";
		lastname.focus();
		lastname.style.background = "#c9ffe2";
		return false;
	} else {
		document.getElementById("guess82").innerHTML = "Thank you for submitting the form.";
	}
	lastname.style.background = "#ffffff";
}

function chapter83(selectID) {
	var targetMenu = document.getElementById(selectID);
	if(targetMenu.selectedIndex === 0) {
		document.getElementById("guess83").innerHTML = "Please select an item.";
		return false;
	} else {
		document.getElementById("guess83").innerHTML = "Thank you for your selection.";
	}
}

function chapter84(name) {
	var items = document.getElementsByName(name);
	for(var i=0;i<items.length;i++) {
		if(items[i].checked){
			document.getElementById("guess84").innerHTML = "Thank you for your submission.";
			return true;
		}
	}
	document.getElementById("guess84").innerHTML = "Please check an item.";
	return false;
}

function chapter85() {
	var zipField = document.getElementById("zip");
	var valueEntered = document.getElementById("zip").value;
	var numChars = document.getElementById("zip").value.length;
	if(numChars < 5) {
		document.getElementById("guess85").innerHTML = ("Please enter a 5-digit number.");
		zipField.focus();
		zipField.style.background = "#c9ffe2";
		return false;
	} 
	for(var i=0;i<=4;i++){
		var thisChar = parseInt(valueEntered[i]);
		if(isNaN(thisChar)){
			document.getElementById("guess85").innerHTML = ("Please only enter numbers.");
			zipField.focus();
			zipField.style.background = "#c9ffe2";
			return false;
		} else {
			document.getElementById("guess85").innerHTML = ("Thank you. Your form has been submitted.");		
		}
	}
	zipField.style.background = "#ffffff";
}

function chapter86() {
	var addressIsLegal = true;
	var emailField = document.getElementById("email");
	var eEntered =  document.getElementById("email").value; 
	if(eEntered.indexOf(" ")!==-1){
		document.getElementById("guess86").innerHTML("Please en an email address with no spaces in it.");
		emailField.focus();
		emailField.style.background = "#c9ffe2";
		return false;
	}
	if (eEntered.indexOf("@")<1 || eEntered.indexOf("@")>eEntered.length-5) {
		addressIsLegal = false;
	}
	if(eEntered.indexOf(".")-eEntered.indexOf("@")<2 ||eEntered.indexOf(".") > eEntered.length-3){
		addressIsLegal = false;
	}
	if(addressIsLegal === false){
		document.getElementById("guess86").innerHTML = ("Please enter the correct email address.");
		emailField.focus();
		emailField.style.background = "#c9ffe2";
		return false;
	} else {
		document.getElementById("guess86").innerHTML = "Thank you. You form has been submitted."
	}
	emailField.style.background = "#ffffff";
}

function chapter87() {
	try {
		var deerGreeting = `Welcome to The Vegan Deer!`;
		document.getElementById("guess87").innerHTML = (deeGreeting);
	}
	catch(error){
		document.getElementById("guess87").innerHTML = error +".";
	}
}

function chapter88() {
	try {
		var something = document.getElementById("userInput");
		something.style.background = "white";
		var addressIsLegal = true;
		var eEntered = document.getElementById("userInput").value;
		if(eEntered.indexOf(" ")!==-1){	
			something.focus();
			something.style.background = "#c9ffe2";
			throw("There are one ore more spaces in the email address.");
			return false;
		}
		if (eEntered.indexOf("@")<1 || eEntered.indexOf("@")>eEntered.length-5) {
			addressIsLegal = false;
		}
		if(eEntered.indexOf(".")-eEntered.indexOf("@")<2 || eEntered.indexOf(".") > eEntered.length-3){
			addressIsLegal = false;
		}
		if(addressIsLegal === false){
			something.focus();
			something.style.background = "#c9ffe2";
			throw("The format of the email is not correct.");
			return false;
		} else {
		document.getElementById("guess88").innerHTML = "Thank you. You form has been submitted."
		}	
	}
	catch(error) {
		document.getElementById("guess88").innerHTML = (error);		
	}	
}

// function and variable for chapter 89

var button1 = document.getElementById("chapter89");
button1.onclick = welcomeMessage;

function welcomeMessage() {
	document.getElementById("guess89").innerHTML = "Welcome to the Vegan Deer!";
}






