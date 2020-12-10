// JavaScript Document
/* eslint-disable */
	
function fizzbuzz2() {
		var x = document.getElementById("fname").value;
			var z = document.getElementById("middleinitial").value;
			var y = document. getElementById("lname").value;
		document.getElementById("greeting").innerHTML = "Here is our menu, " + x + " " + z + " " + y +"!";		 
		var text = "";
		var i;
	var firstDivisor = 3;
	var secondDivisor = 5;
		for (i = 1; i < 141; i++) {
			if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)){
			text+= "<li class='lightGold'>" + "&nbsp;&nbsp;&nbsp;Avocado Salad" + "</li>";
		} else if (checkDivision(i, firstDivisor) && !checkDivision(i, secondDivisor)) {
			text+= "<li class='lightGreen'>" + "&nbsp;&nbsp;&nbsp;Avocado" + "</li>";
		} else if (!checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
			text+= "<li class='lightYellow'>" + "&nbsp;&nbsp;&nbsp;Salad" + "</li>";			
		} else {
			text+= "<li>" + "&nbsp;&nbsp;&nbsp;Broccoli" + "</li>";	
		}
			document.getElementById("menu").innerHTML = text;
		}
		}

function checkDivision(num1, num2) { 
if(num1 % num2 === 0) {
	return true;
} else {
	return false;
}
}
							
  