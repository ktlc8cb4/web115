// JavaScript Document
/* eslint-disable */
	
var submitButton = document.getElementById("checksubmit");
submitButton.onclick = print;

function print() {
	checkSomething();
	if(checkSomething()) {
		fizzbuzz4();
	} else {
		checkSomething();
	}
}

function checkSomething() {
	var firstName = document.getElementById("fname");
    if(firstName.value.length === 0) {
		document.getElementById("nameerror").innerHTML= "**Please make sure you have entered your first name.";
		firstName.focus();
		firstName.style.background = "#ffe4b5";
		return false;
	} else {
		firstName.style.background = "#c9ffe2";
		document.getElementById("nameerror").innerHTML= "";
		return true;
	}	
}	
					
function check(num1, num2) { 
	if(num1 % num2 === 0) {
		return true;
	} else {
		return false;
	}
}

function fizzbuzz4() {
	var x = document.getElementById("fname").value;
	var z = document.getElementById("middleinitial").value;
	var y = document.getElementById("lname").value;
	document.getElementById("greeting").innerHTML = "Welcome to The Vegan Deer, " + x + " " + z + " " + y +"!<br>Here is our menu:";		 
	var text = "";
	var sampleText = "";
	var i = 1;
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var num3 = document.getElementById("num3").value;
	var total = parseInt(document.getElementById("counttotal").value);
	var increment = parseInt(document.getElementById("increment").value);
	var word1 = document.getElementById("word1").value;
	var word2 = document.getElementById("word2").value;
	var word3 = document.getElementById("word3").value;
	var word4 = document.getElementById("word4").value;
	for (i; i<total+1; i+=increment) {
			if (check(i, num1)){
				sampleText = "class='num3'>" + i + ".&nbsp;&nbsp;&nbsp;" + word1 + "</li>";
				if (check(i, num2)) {
						sampleText = "class='num3-5'>" + i + ".&nbsp;&nbsp;&nbsp;" + word1 + " " + word2 + "</li>";
						if (check(i, num3)) {
							sampleText = "class='allNumber'>" + i + ".&nbsp;&nbsp;&nbsp;" + word1 + " " + word2 + " " + word3 + "</li>";
						}
				} else {
					if (check(i, num3)) {
						sampleText= "class='num3-7'>" + i + ".&nbsp;&nbsp;&nbsp;" + word1 + " " + word3 + "</li>";
					} 					
				}
			} else {
				if (check(i, num2)) {
					sampleText= "class='num5'>" + i + ".&nbsp;&nbsp;&nbsp;" + word2 + "</li>";
					if (check(i, num3)) {
						sampleText= "class='num5-7'>" + i + ".&nbsp;&nbsp;&nbsp;" + word2 + " " + word3 + "</li>";
					}
				} else {
					if (check(i, num3)) {
						sampleText= "class='num7'>" + i + ".&nbsp;&nbsp;&nbsp;" + word3 + "</li>";
					} else {
						sampleText = ">" + i + ".&nbsp;&nbsp;&nbsp;" + word4 + "</li>";
					} 						
				}
			} 
		text += "<li " + sampleText;
	}
	document.getElementById("menu").innerHTML = text;
}


  
  